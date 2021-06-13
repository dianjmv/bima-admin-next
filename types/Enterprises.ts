export type Enterprises={
    id: number;
    name: string;
    phone_number: string;
    address: string;
    logo_url: string;
    country: string;
    city: string;
    created_at: string;
    updated_at: string;
    pivot: {
        user_id: number;
        enterprise_id: number;
    }
}
