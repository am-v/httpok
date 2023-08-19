import { useState } from "react";

interface ListItemProps {
  code: string;
  message: string;
  description: string;
  isActive: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  code,
  message,
  description,
  isActive,
}) => {
  const [showDescription, setShowDescription] = useState(isActive);
  return (
    <div
      role="button"
      className="flex flex-col py-4 px-3 hover:bg-slate-50 transition-all"
      onClick={() => setShowDescription(!showDescription)}
    >
      <div className="flex w-full space-x-6">
        <div className="font-medium">{code}</div>
        <div className="text-slate-700">{message}</div>
      </div>
      {showDescription && (
        <div className="py-4 text-sm text-slate-600">{description}</div>
      )}
    </div>
  );
};

export default ListItem;
