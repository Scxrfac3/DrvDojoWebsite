export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string;
          message?: string;
          created_at?: string;
        };
      };
      dual_control_requests: {
        Row: {
          id: number;
          name: string;
          phone: string;
          vehicle: string;
          questions: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          phone: string;
          vehicle: string;
          questions?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          phone?: string;
          vehicle?: string;
          questions?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
