export class Database<T> {
    private entries: T[] = [];

    public addEntry(entry: T): void {
        this.entries.push(entry);
    }

    public getAllEntries(): T[] {
        return [...this.entries];
    }

    public findEntry(predicate: (entry: T) => boolean): T | undefined {
        return this.entries.find(predicate);
    }

    public removeEntry(entry: T): void {
        const index = this.entries.indexOf(entry);
        if (index > -1) {
            this.entries.splice(index, 1);
        }
    }

    public clear(): void {
        this.entries = [];
    }
}