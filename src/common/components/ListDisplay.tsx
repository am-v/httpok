import ListItem from "@/common/components/ListItem";

import { Codes } from "@/common/types";

interface ListDisplayProps {
  data: Codes;
  hash: string;
}

const ListDisplay: React.FC<ListDisplayProps> = ({ data, hash }) => (
  <div className="w-full max-w-screen-xl mx-auto px-3 py-4 flex flex-col space-y-9">
    {data.map(({ list = [], ...group }) => (
      <div
        id={group.id}
        key={group.id}
        className="w-full md:space-x-8 flex flex-col space-y-8 md:space-y-0 justify-between md:flex-row"
      >
        <div className="w-full md:w-1/3 md:py-6">
          <a
            href={`#${group.id}`}
            className="font-semibold text-xl hover:text-slate-700"
          >
            {group.code}
          </a>
          <div className="font-medium text-slate-900 py-2">{group.message}</div>
          <div className="text-slate-700 text-sm tracking-wider">
            {group.description}
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white rounded flex flex-col divide-y divide-slate-100 px-4 py-6">
          {list.map((error) => (
            <div key={error.id} id={error.id} className="py-2">
              <ListItem
                code={error.id}
                message={error.message}
                description={error.description}
                isActive={hash === `#${error.code}`}
              />
            </div>
            // <div key={error.key} className="flex w-full space-x-6 py-4 px-3">
            //   <div className="font-medium" id={error.code}>
            //     {error.code}
            //   </div>
            //   <div className="text-slate-700">{error.message}</div>
            // </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ListDisplay;
