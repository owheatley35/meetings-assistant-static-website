
class ViewModel {
    public readonly givenDocument: Document
    private isAuthenticated: boolean;
    private readonly isSecurePage: boolean;

    constructor(givenDocument: Document, isSecurePage: boolean) {
        this.givenDocument = givenDocument;
        this.isSecurePage = isSecurePage;
        this.isAuthenticated = false;

    }

    public navigateTo(location: string): void {
        return this.givenDocument.location.replace(this.givenDocument.location.origin + location);
    }

    public isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}

export default ViewModel;
