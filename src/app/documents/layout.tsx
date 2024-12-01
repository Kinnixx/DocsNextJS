// Interface : C'est un contrat de typage qui définit la structure des props (propriétés) attendues par le composant.
// Ce layout reçoit un children, qui représente le contenu qu'il enveloppe et rend à l'intérieur d'une div
interface DocumentsLayoutProps {
    children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            {/* La navbar sera présente sur toutes les sous pages. Donc, /documents ; /documents/123 ; /documents/settings etc */}
            <nav className="w-full bg-red-500">Document navbar</nav>
            {children}
        </div>
     );
}
 
export default DocumentsLayout;