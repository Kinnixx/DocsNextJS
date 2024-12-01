import { Editor } from "./editor";

interface DocumentIdPageProps {
    params: { documentId: string };
}

// On passe en paramètre l'interface qui récupère notre documentId
const DocumentIdPage = ({params}: DocumentIdPageProps) => {
    const { documentId } = params;
    
    return ( 
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
     );
}
 
export default DocumentIdPage;