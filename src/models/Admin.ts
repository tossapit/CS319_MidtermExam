export interface Admin {
    name: string;
    department: string;
}

export class AdminUser implements Admin {
    constructor(
        public name: string,
        public department: string,
        private accessLevel: number
    ) {}

    public getAccessLevel(): number {
        return this.accessLevel;
    }

    public getAdminInfo(): string {
        return `Admin: ${this.name}, Department: ${this.department}, Access Level: ${this.accessLevel}`;
    }
}

// Utility functions for Admin
export const isHighLevelAdmin = (admin: Admin, minLevel: number = 5): boolean => {
    return (admin as AdminUser).getAccessLevel?.() >= minLevel;
};

export const getAdminInfo = (admin: Admin): string => {
    return `Admin: ${admin.name}, Department: ${admin.department}`;
};