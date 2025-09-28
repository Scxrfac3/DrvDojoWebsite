import { useEffect, useId, useLayoutEffect, useRef, useState, useCallback } from 'react';

import './ElectricBorder.css';

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
}

const ElectricBorder = ({ children, color = '#FFD700', intensity = 'medium', speed = 1, chaos = 1, thickness = 2, className, style, active = true }: ElectricBorderProps) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef<SVGSVGElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const strokeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  // Throttled update function to prevent excessive calculations during scroll
  const updateAnim = useCallback(() => {
    const now = performance.now();
    // Throttle updates to maximum once every 100ms
    if (now - lastUpdateTimeRef.current < 100) {
      return;
    }
    lastUpdateTimeRef.current = now;

    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host || !isVisible) return;

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (strokeRef.current) {
        strokeRef.current.style.filter = `url(#${filterId})`;
      }

      const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
      const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));

      const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]')) as SVGAnimateElement[];
      if (dyAnims.length >= 2) {
        dyAnims[0].setAttribute('values', `${height}; 0`);
        dyAnims[1].setAttribute('values', `0; -${height}`);
      }

      const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]')) as SVGAnimateElement[];
      if (dxAnims.length >= 2) {
        dxAnims[0].setAttribute('values', `${width}; 0`);
        dxAnims[1].setAttribute('values', `0; -${width}`);
      }

      const baseDur = 6;
      const dur = Math.max(0.001, baseDur / (speed || 1));
      [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));

      const disp = svg.querySelector('feDisplacementMap') as SVGFEDisplacementMapElement;
      if (disp) disp.setAttribute('scale', String(30 * (chaos || 1)));

      const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`) as SVGFilterElement;
      if (filterEl) {
        filterEl.setAttribute('x', '-200%');
        filterEl.setAttribute('y', '-200%');
        filterEl.setAttribute('width', '500%');
        filterEl.setAttribute('height', '500%');
      }

      // Only restart animations if necessary
      [...dyAnims, ...dxAnims].forEach(a => {
        if (typeof a.beginElement === 'function') {
          try {
            a.beginElement();
          } catch {
            // Silently ignore animation errors
          }
        }
      });
    });
  }, [speed, chaos, filterId, isVisible]);

  // Set up intersection observer for visibility detection
  useEffect(() => {
    if (!rootRef.current) return;

    intersectionObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    intersectionObserverRef.current.observe(rootRef.current);

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  // Optimized resize observer with debouncing
  useLayoutEffect(() => {
    if (!rootRef.current || !active || !isVisible) return;

    // Clean up previous observer
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
    }

    // Create new resize observer with debouncing
    resizeObserverRef.current = new ResizeObserver(() => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(updateAnim);
    });

    resizeObserverRef.current.observe(rootRef.current);
    
    // Initial update
    updateAnim();

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [active, isVisible, updateAnim]);

  // Only update when dependencies change and component is visible
  useEffect(() => {
    if (active && isVisible) {
      updateAnim();
    }
  }, [speed, chaos, active, isVisible, updateAnim]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const vars = {
    ['--electric-border-color']: color,
    ['--eb-border-width']: `${thickness}px`
  };

  return (
    <div
      ref={rootRef}
      className={`electric-border ${className ?? ''}`}
      style={{
        ...vars,
        ...style,
        willChange: isVisible ? 'transform' : 'auto',
        transform: isVisible ? 'translateZ(0)' : 'none'
      }}
    >
      <svg ref={svgRef} className="eb-svg" aria-hidden focusable="false">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            {/* Reduced complexity for better performance */}
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className="eb-layers">
        <div ref={strokeRef} className="eb-stroke" />
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>

      <div className="eb-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;