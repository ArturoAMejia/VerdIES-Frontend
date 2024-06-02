export interface IUser {
  user: {
    id: string;
    email: string;
    email_verified_at: Date;
    provider: string | null;
    provider_id: number | null;
    created_at: Date;
    updated_at: Date;
  }
  access_token: string
  token_type: string
  expires_in: number
}
