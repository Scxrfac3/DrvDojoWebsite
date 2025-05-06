import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

// Create mock versions of react-router hooks
type MockRouterProviderProps = {
  params?: Record<string, string>;
  children: React.ReactNode;
};

// This is a component that provides mock router context
export function MockRouterProvider({
  params = {},
  children,
}: MockRouterProviderProps) {
  // Create a context to hold our mock router values
  return <>{children}</>;
}

// Custom hooks that can be used in place of react-router hooks
export function useParamsMock(defaultParams: Record<string, string> = {}) {
  return defaultParams;
}

export function useNavigateMock() {
  return () => {};
}

export function useLocationMock(pathname: string = "/") {
  return {
    pathname,
    search: "",
    hash: "",
    state: null,
    key: "default",
  };
}

// Default export for convenience
export default MockRouterProvider;
