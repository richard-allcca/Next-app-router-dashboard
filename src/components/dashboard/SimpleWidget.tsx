import Link from "next/link";

interface SimpleWidgetProps {
  title?: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title, subtitle, icon, label, href }: SimpleWidgetProps
) => {

  const renderTitle = title || "Título del Widget";
  const renderSubtitle = subtitle || "Subtítulo del Widget";
  const renderLabel = label || "Etiqueta del Widget";

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <div id="icon">
        {icon}
      </div>
    );
  };

  const renderHref = () => {
    if (!href) return null;

    return (
      <div
        className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
        <Link href={href} className="text-indigo-600 text-xs font-medium">Más</Link>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{renderLabel}</h2>
        </div>
        <div className="my-3" >
          <div className="flex flex-row items-center justify-center space-x-1 ">
            {renderIcon()}
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{renderTitle}</h4>
              <p className="text-xs text-gray-500">{renderSubtitle}</p>
            </div>
          </div>
        </div>
        {renderHref()}
      </div>
    </div>
  );
};