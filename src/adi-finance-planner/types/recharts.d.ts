declare module 'recharts' {
  import * as React from 'react';

  export interface TooltipProps {
    contentStyle?: React.CSSProperties;
    formatter?: (value: number, name: string) => [React.ReactNode, string];
    label?: string;
  }

  export interface AxisProps {
    dataKey?: string;
    stroke?: string;
    fontSize?: number;
    tickFormatter?: (value: number) => string;
  }

  export interface BarProps {
    dataKey: string;
    fill?: string;
    radius?: [number, number, number, number];
    name?: string;
  }

  export interface LineProps {
    type?: 'monotone' | 'linear';
    dataKey: string;
    stroke?: string;
    strokeWidth?: number;
    dot?: object;
    activeDot?: object;
  }

  export class XAxis extends React.Component<AxisProps> {}
  export class YAxis extends React.Component<AxisProps> {}
  export class CartesianGrid extends React.Component<{ strokeDasharray?: string; stroke?: string }> {}
  export class Tooltip extends React.Component<TooltipProps> {}
  export class Bar extends React.Component<BarProps> {}
  export class Line extends React.Component<LineProps> {}
  export class ResponsiveContainer extends React.Component<{ width?: string | number; height?: string | number; children: React.ReactNode }> {}
  export class LineChart extends React.Component<{ data: any[]; children: React.ReactNode }> {}
  export class BarChart extends React.Component<{ data: any[]; children: React.ReactNode }> {}
}
