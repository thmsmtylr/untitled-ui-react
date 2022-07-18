import React, { useState, ChangeEvent } from "react";
import { classNames } from "../../helpers/classNames";
import { Checkbox } from "./checkbox";
import ArrowDown from "../../public/icons/arrow-down.svg";
import CheckIcon from "../../public/icons/check.svg";

enum Plans {
  Basic = "Basic",
  Business = "Business",
  Enterprise = "Enterprise",
}

enum Status {
  Paid = "Paid",
  Pending = "Pending",
  Overdue = "Overdue",
}

const tableHeaders: string[] = ["Invoice", "Status", "Amount", "Plan"];

type TableProps = {
  id: string;
  invoice: string;
  status: Status;
  amount: number;
  plan: string;
}[];

export const billingHistory: TableProps = [
  {
    id: "0",
    invoice: "Jun 2022",
    status: Status.Paid,
    amount: 10,
    plan: Plans.Basic,
  },
  {
    id: "1",
    invoice: "Jul 2022",
    status: Status.Paid,
    amount: 10,
    plan: Plans.Basic,
  },
  {
    id: "2",
    invoice: "Sep 2022",
    status: Status.Paid,
    amount: 40,
    plan: Plans.Enterprise,
  },
  {
    id: "3",
    invoice: "Nov 2022",
    status: Status.Paid,
    amount: 20,
    plan: Plans.Business,
  },
  {
    id: "4",
    invoice: "Dec 2022",
    status: Status.Paid,
    amount: 10,
    plan: Plans.Basic,
  },
];

export const Table = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<string[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsChecked(billingHistory.map((item) => item.id));
    if (selectAll) setIsChecked([]);
  };

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setIsChecked([...isChecked, id]);
    if (!checked) setIsChecked(isChecked.filter((item: string) => item !== id));
  };

  return (
    <table className="w-full ring-1 ring-gray-200 sm:rounded-lg overflow-hidden shadow-md mb-12 sm:mb-0">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          {tableHeaders.map((header) => (
            <th
              className={classNames(
                header === "Invoice" ? "flex items-center gap-4" : "",
                header === "Plan" ? "hidden sm:table-cell" : "",
                "px-6 py-3 text-xs font-medium text-gray-500 text-left"
              )}
              key={header}
            >
              {header === "Invoice" && (
                <>
                  <Checkbox
                    id="selectAll"
                    ariaLabel="Invoices"
                    handleClick={handleSelectAll}
                    checked={selectAll}
                  />{" "}
                  <ArrowDown />
                </>
              )}{" "}
              {header}{" "}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {billingHistory.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-7 text-left text-sm font-medium text-gray-900 flex items-center gap-4">
              <Checkbox
                key={item.id}
                id={item.id}
                handleClick={handleClick}
                checked={isChecked.includes(item.id)}
              />
              {item.invoice}
            </td>
            <td className="px-6 py-6">
              <div className="text-xs w-[55px] h-[22px] flex items-center justify-center gap-1 leading-[22px] rounded-2xl font-medium text-success-700 bg-success-50 py-[2px] pl-[6px] pr-2">
                <CheckIcon className="text-success-500" /> {item.status}
              </div>
            </td>
            <td className="px-6 py-6 font-normal text-sm text-gray-500 text-left">
              USD{" "}
              {new Intl.NumberFormat(`en-US`, {
                currency: `USD`,
                style: "currency",
              }).format(item.amount)}
            </td>
            <td className="px-6 py-6 font-normal text-sm text-gray-500 text-left hidden md:inline-block">
              {item.plan} Plan
            </td>
            <td className="px-6 py-6 hidden sm:table-cell text-right">
              <a href="#" className="text-primary-700 text-sm font-medium">
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = "Table";
