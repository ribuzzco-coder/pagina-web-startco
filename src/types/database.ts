export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      admin_profiles: {
        Row: {
          created_at: string;
          email: string;
          full_name: string | null;
          id: string;
          is_active: boolean;
          role: Database["public"]["Enums"]["admin_role"];
        };
        Insert: {
          created_at?: string;
          email: string;
          full_name?: string | null;
          id: string;
          is_active?: boolean;
          role?: Database["public"]["Enums"]["admin_role"];
        };
        Update: {
          created_at?: string;
          email?: string;
          full_name?: string | null;
          id?: string;
          is_active?: boolean;
          role?: Database["public"]["Enums"]["admin_role"];
        };
        Relationships: [];
      };
      audit_logs: {
        Row: {
          action: string;
          actor_id: string | null;
          created_at: string;
          entity_id: string | null;
          entity_type: Database["public"]["Enums"]["audit_entity_type"];
          id: string;
          metadata: Json;
        };
        Insert: {
          action: string;
          actor_id?: string | null;
          created_at?: string;
          entity_id?: string | null;
          entity_type: Database["public"]["Enums"]["audit_entity_type"];
          id?: string;
          metadata?: Json;
        };
        Update: {
          action?: string;
          actor_id?: string | null;
          created_at?: string;
          entity_id?: string | null;
          entity_type?: Database["public"]["Enums"]["audit_entity_type"];
          id?: string;
          metadata?: Json;
        };
        Relationships: [];
      };
      diagnostic_requests: {
        Row: {
          cargo: string | null;
          contexto: string | null;
          created_at: string;
          email: string;
          empresa: string;
          id: string;
          internal_notes: string | null;
          nombre: string;
          reto_principal: string;
          reviewed_at: string | null;
          reviewed_by: string | null;
          sector: string;
          source: string;
          status: Database["public"]["Enums"]["diagnostic_request_status"];
          submission_hash: string;
          tamano_equipo: string | null;
          updated_at: string;
          whatsapp: string | null;
          ya_esta_vendiendo: boolean;
        };
        Insert: {
          cargo?: string | null;
          contexto?: string | null;
          created_at?: string;
          email: string;
          empresa: string;
          id?: string;
          internal_notes?: string | null;
          nombre: string;
          reto_principal: string;
          reviewed_at?: string | null;
          reviewed_by?: string | null;
          sector: string;
          source?: string;
          status?: Database["public"]["Enums"]["diagnostic_request_status"];
          submission_hash: string;
          tamano_equipo?: string | null;
          updated_at?: string;
          whatsapp?: string | null;
          ya_esta_vendiendo: boolean;
        };
        Update: {
          cargo?: string | null;
          contexto?: string | null;
          created_at?: string;
          email?: string;
          empresa?: string;
          id?: string;
          internal_notes?: string | null;
          nombre?: string;
          reto_principal?: string;
          reviewed_at?: string | null;
          reviewed_by?: string | null;
          sector?: string;
          source?: string;
          status?: Database["public"]["Enums"]["diagnostic_request_status"];
          submission_hash?: string;
          tamano_equipo?: string | null;
          updated_at?: string;
          whatsapp?: string | null;
          ya_esta_vendiendo?: boolean;
        };
        Relationships: [];
      };
      lead_events: {
        Row: {
          actor_id: string | null;
          created_at: string;
          diagnostic_request_id: string | null;
          event_type: Database["public"]["Enums"]["lead_event_type"];
          id: string;
          metadata: Json;
        };
        Insert: {
          actor_id?: string | null;
          created_at?: string;
          diagnostic_request_id?: string | null;
          event_type: Database["public"]["Enums"]["lead_event_type"];
          id?: string;
          metadata?: Json;
        };
        Update: {
          actor_id?: string | null;
          created_at?: string;
          diagnostic_request_id?: string | null;
          event_type?: Database["public"]["Enums"]["lead_event_type"];
          id?: string;
          metadata?: Json;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_active_admin: {
        Args: {
          user_id?: string | null;
        };
        Returns: boolean;
      };
    };
    Enums: {
      admin_role: "owner" | "admin" | "reviewer";
      audit_entity_type:
        | "diagnostic_request"
        | "lead_event"
        | "admin_profile"
        | "system";
      diagnostic_request_status:
        | "pending_review"
        | "reviewed"
        | "qualified"
        | "unqualified"
        | "archived";
      lead_event_type:
        | "diagnostic_request_created"
        | "duplicate_detected"
        | "cta_clicked"
        | "reviewed"
        | "status_changed"
        | "note_added";
    };
    CompositeTypes: Record<string, never>;
  };
};

type PublicSchema = Database["public"];
type PublicTables = PublicSchema["Tables"];

export type TableName = keyof PublicTables;
export type TableRow<T extends TableName> = PublicTables[T]["Row"];
export type TableInsert<T extends TableName> = PublicTables[T]["Insert"];
export type TableUpdate<T extends TableName> = PublicTables[T]["Update"];

export type DiagnosticRequestRow = TableRow<"diagnostic_requests">;
export type DiagnosticRequestInsert = TableInsert<"diagnostic_requests">;
export type DiagnosticRequestUpdate = TableUpdate<"diagnostic_requests">;
export type LeadEventInsert = TableInsert<"lead_events">;
export type AdminProfileRow = TableRow<"admin_profiles">;
export type AuditLogInsert = TableInsert<"audit_logs">;

