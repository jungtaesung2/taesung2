import { ResumesService } from "../services/resumes.service.js";

class ResumeController {
    constructor() {
        this.resumesService = new ResumesService();
    }

    // 이력서 조회 API
    getResumes = async (req, res, next) => {
        try {
            const resumes = await this.resumesService.findAllResumes();
            return res.status(200).json({ data: resumes });
        } catch (err) {
            next(err);
        }
    }

    // 이력서 생성 API
    createResume = async (req, res, next) => {
        try {
            const { resumeId, status, userId, title, content } = req.body;

            const createdResume = await this.resumesService.createResume(
                resumeId, status, userId, title, content
            );
            return res.status(201).json({ data: createdResume });
        } catch (err) {
            next(err);
        }
    }
}

export default ResumeController;
