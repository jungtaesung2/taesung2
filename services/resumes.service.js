import {Resumepository} from "../repositories/resumes.repository.js"

export class ResumeService {
    resumeRepository= new Resumepository
    
    findAllResumes = async () =>{
        const resumes = await this.resumeRepository.findAllResumes();

        resumes.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });

        return resumes.map((resume) => {
            return {
                resumeId : resume.resumeId,
                title : resume.title,
                userId : resume.userId,
                status : resume.status,
                content : resume.content,
            }
        })
    }

    createResume = async (resumeId, userId, status, title, content) =>{
}
}
