
class PageService {
    checkPass(pass: string) {
        return pass === 'admin';
    }
}

const pageService = new PageService()
export default pageService;
