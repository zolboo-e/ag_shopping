//
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import type { FC } from "react";
//

export const HeaderSearch: FC = () => {
  return (
    <form
      className="flex rounded-md"
      onSubmit={(event) => event.preventDefault()}
    >
      <button className="my-[1px] -mr-[97px] flex w-[96px] items-center gap-x-9 rounded-md bg-white px-4">
        <p>All</p>
        <div className="grow-0 rounded-full bg-primary p-1">
          <ChevronDownIcon className="h-3 w-3 text-white" />
        </div>
      </button>
      <input
        className="rounded-md bg-background-secondary pl-28 pr-14"
        placeholder="Opel GM DEXO S2"
      />
      <button className="my-[1px] -ml-[41px] rounded-md bg-primary p-2.5">
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      </button>
    </form>
  );
};
