import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './hooks/useApp';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { AddLesson } from './components/AddLesson';
import { AddExpense } from './components/AddExpense';
import { AddMileage } from './components/AddMileage';
import { GoalsPage } from './components/Goals';
import { SettingsPage } from './components/Settings';

// Inner component that uses useLocation, wrapped inside MemoryRouter
function FinancePlannerRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-lesson" element={<AddLesson />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/add-mileage" element={<AddMileage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}

function App() {
  // Use MemoryRouter instead of BrowserRouter because this sub-app is rendered
  // inside the parent's BrowserRouter context. A nested BrowserRouter would
  // interfere with URL-based auth callbacks (magic link hash fragments).
  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <AppProvider>
        <FinancePlannerRoutes />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f43f5e',
                secondary: '#fff',
              },
            },
          }}
        />
      </AppProvider>
    </MemoryRouter>
  );
}

export default App;
