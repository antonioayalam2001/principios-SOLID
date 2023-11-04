(() => {

    const celciusTemperatures = [33.6, 12.34];

    const serverIP = '123.123.123.123';

    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const usersEmails = users.map(user => user.email);

    const isJumping = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksFromOrigin(url: string) {
        throw new Error('Function not implemented.');
    }

    function getArea(edges: number): number {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

    // Malos
    class Manager { }
    class Data { }
    class Info { }
    class Individual { }
    class Processor { }
    class SpecialMonsterView { }

    interface SendEmailOptions {
        apiKey?: string;
        body?: string;
        form?: string;
        subject?: string;
        toWhom: string;
    }
    
    
    function sendEmail({ toWhom, form, body, subject, apiKey }: SendEmailOptions) {
    
    }

    sendEmail({ toWhom: ''})

})();
