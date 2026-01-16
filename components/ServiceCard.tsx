interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg card-hover">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}