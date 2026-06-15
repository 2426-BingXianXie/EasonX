import resumeSWE from '../assets/documents/Eason_Xie_Resume_SWE.pdf';
import resumeData from '../assets/documents/Eason_Xie_Resume_Data.pdf';

// Two tailored resume variants. `file` is the imported asset URL,
// `download` is the filename suggested to the browser on download.
export const resumes = [
  {
    id: 'swe',
    label: 'Software Engineering',
    description: 'General software engineering roles',
    file: resumeSWE,
    download: 'Eason_Xie_Resume_Software_Engineering.pdf'
  },
  {
    id: 'data',
    label: 'Data Science / AI & ML',
    description: 'Data science, AI & machine learning roles',
    file: resumeData,
    download: 'Eason_Xie_Resume_Data_Science_AI_ML.pdf'
  }
];

export default resumes;
