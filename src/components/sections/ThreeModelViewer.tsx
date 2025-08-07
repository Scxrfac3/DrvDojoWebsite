import React, { useRef, useEffect, useState } from 'react';

// Check WebGL support
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl">
      <div className="text-white/60 text-sm">Loading 3D experience...</div>
    </div>
  );
}

// Error fallback component
function ErrorFallback({ error }: { error: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl p-4">
      <div className="text-white/60 text-sm mb-2">3D experience unavailable</div>
      <div className="text-white/40 text-xs text-center">{error}</div>
    </div>
  );
}

// CSS 3D Car Fallback
function CSS3DCar() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-32 h-16 transform-style-3d transform rotate-x-15 animate-spin-slow">
        {/* Car body */}
        <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg opacity-80"></div>
        {/* Car roof */}
        <div className="absolute top-0 left-4 right-4 h-8 bg-blue-600 rounded-t-lg opacity-80"></div>
        {/* Wheels */}
        <div className="absolute bottom-0 left-2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-0 right-2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
}

// Main ThreeModelViewer component
interface ThreeModelViewerProps {
  modelPath: string;
  className?: string;
}

const ThreeModelViewer: React.FC<ThreeModelViewerProps> = ({ 
  modelPath, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support first
    if (!checkWebGLSupport()) {
      setWebGLSupported(false);
      setError('WebGL is not supported in your browser');
      setLoading(false);
      return;
    }

    if (!canvasRef.current) return;

    let scene: any;
    let camera: any;
    let renderer: any;
    let model: any;
    let animationId: number;

    const initThreeJS = () => {
      try {
        console.log('Starting Three.js initialization...');
        
        // Dynamically import Three.js to avoid SSR issues
        import('three').then(THREE => {
          try {
            console.log('Three.js loaded successfully');
            
            // Initialize Three.js
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, canvasRef.current!.clientWidth / canvasRef.current!.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ 
              canvas: canvasRef.current!,
              alpha: true,
              antialias: true 
            });
            
            console.log('WebGLRenderer created');
            
            renderer.setSize(canvasRef.current!.clientWidth, canvasRef.current!.clientHeight);
            renderer.setClearColor(0x000000, 0);

            // Add lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            // Create a simple rotating cube first (to test basic functionality)
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshPhongMaterial({ 
              color: 0x2563eb,
              transparent: true,
              opacity: 0.8
            });
            model = new THREE.Mesh(geometry, material);
            scene.add(model);

            console.log('3D model created successfully');
            setLoading(false);

            // Animation loop
            const animate = () => {
              animationId = requestAnimationFrame(animate);
              
              if (model) {
                model.rotation.x += 0.01;
                model.rotation.y += 0.01;
              }
              
              renderer.render(scene, camera);
            };

            animate();

            // Handle resize
            const handleResize = () => {
              if (!canvasRef.current) return;
              camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => {
              window.removeEventListener('resize', handleResize);
              cancelAnimationFrame(animationId);
              if (renderer) renderer.dispose();
            };

          } catch (innerErr) {
            console.error('Error in Three.js execution:', innerErr);
            setError('Three.js execution failed: ' + (innerErr as Error).message);
            setLoading(false);
          }
        }).catch(importErr => {
          console.error('Error importing Three.js:', importErr);
          setError('Failed to load Three.js library');
          setLoading(false);
        });

      } catch (err) {
        console.error('Error initializing Three.js:', err);
        setError('Failed to initialize 3D: ' + (err as Error).message);
        setLoading(false);
      }
    };

    initThreeJS();

  }, [modelPath]);

  if (!webGLSupported) {
    return (
      <div className={`w-full h-full ${className}`}>
        <CSS3DCar />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full h-full ${className}`}>
        <CSS3DCar />
      </div>
    );
  }

  if (loading) {
    return <LoadingFallback />;
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full rounded-xl"
        style={{ 
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default ThreeModelViewer;
