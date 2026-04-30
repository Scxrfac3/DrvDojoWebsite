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
      profiles: {
        Row: {
          id: string;
          email: string | null;
          has_blueprint_access: boolean | null;
          blueprint_purchased_at: string | null;
          stripe_customer_id: string | null;
          subscription_status: string | null;
          plan_type: string | null;
          trial_ends_at: string | null;
          subscription_id: string | null;
          current_period_end: string | null;
          has_finance_access: boolean | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email?: string | null;
          has_blueprint_access?: boolean | null;
          blueprint_purchased_at?: string | null;
          stripe_customer_id?: string | null;
          subscription_status?: string | null;
          plan_type?: string | null;
          trial_ends_at?: string | null;
          subscription_id?: string | null;
          current_period_end?: string | null;
          has_finance_access?: boolean | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string | null;
          has_blueprint_access?: boolean | null;
          blueprint_purchased_at?: string | null;
          stripe_customer_id?: string | null;
          subscription_status?: string | null;
          plan_type?: string | null;
          trial_ends_at?: string | null;
          subscription_id?: string | null;
          current_period_end?: string | null;
          has_finance_access?: boolean | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      purchases: {
        Row: {
          id: number;
          user_id: string | null;
          email: string | null;
          stripe_session_id: string | null;
          stripe_payment_intent: string | null;
          amount_paid: number | null;
          currency: string | null;
          product: string | null;
          purchased_at: string | null;
          access_granted: boolean | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          email?: string | null;
          stripe_session_id?: string | null;
          stripe_payment_intent?: string | null;
          amount_paid?: number | null;
          currency?: string | null;
          product?: string | null;
          purchased_at?: string | null;
          access_granted?: boolean | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          email?: string | null;
          stripe_session_id?: string | null;
          stripe_payment_intent?: string | null;
          amount_paid?: number | null;
          currency?: string | null;
          product?: string | null;
          purchased_at?: string | null;
          access_granted?: boolean | null;
          created_at?: string | null;
        };
      };
      finance_lessons: {
        Row: {
          id: number;
          user_id: string | null;
          date: string | null;
          pupil_name: string | null;
          duration_hours: number | null;
          hourly_rate: number | null;
          total_earned: number | null;
          payment_status: string | null;
          notes: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          pupil_name?: string | null;
          duration_hours?: number | null;
          hourly_rate?: number | null;
          total_earned?: number | null;
          payment_status?: string | null;
          notes?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          pupil_name?: string | null;
          duration_hours?: number | null;
          hourly_rate?: number | null;
          total_earned?: number | null;
          payment_status?: string | null;
          notes?: string | null;
          created_at?: string | null;
        };
      };
      finance_expenses: {
        Row: {
          id: number;
          user_id: string | null;
          date: string | null;
          category: string | null;
          description: string | null;
          amount: number | null;
          receipt_url: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          category?: string | null;
          description?: string | null;
          amount?: number | null;
          receipt_url?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          category?: string | null;
          description?: string | null;
          amount?: number | null;
          receipt_url?: string | null;
          created_at?: string | null;
        };
      };
      finance_mileage: {
        Row: {
          id: number;
          user_id: string | null;
          date: string | null;
          start_miles: number | null;
          end_miles: number | null;
          business_purpose: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          start_miles?: number | null;
          end_miles?: number | null;
          business_purpose?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          date?: string | null;
          start_miles?: number | null;
          end_miles?: number | null;
          business_purpose?: string | null;
          created_at?: string | null;
        };
      };
      finance_goals: {
        Row: {
          id: number;
          user_id: string | null;
          title: string | null;
          target_amount: number | null;
          current_amount: number | null;
          deadline: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          title?: string | null;
          target_amount?: number | null;
          current_amount?: number | null;
          deadline?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          title?: string | null;
          target_amount?: number | null;
          current_amount?: number | null;
          deadline?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
  };
}
