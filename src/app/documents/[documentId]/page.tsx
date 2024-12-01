// On récupère le documentId
interface DocumentIdPageProps {
    params: { documentId: string };
}

// On passe en paramètre l'interface qui récupère notre documentId
const DocumentIdPage = ({params}: DocumentIdPageProps) => {
    const { documentId } = params;
    
    return ( 
        <div>
            Document Id: {documentId}
        </div>
     );
}
 
export default DocumentIdPage;