
import classNames from "classnames";
import { add, format } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";

const Parent = () => {
  return (
    <div className="w-full p-5">
      <div
        className="flex overflow-x-auto bg-white rounded-md"
        style={{ height: "calc(100vh - 100px)" }}
      >
        {getDays().map((date, index) => (
          <div
            key={index}
            className={classNames(
              "flex-1 min-w-[200px] flex flex-col",
              index === 0 ? "bg-blue-100" : ""
            )}
          >
            <div
              className={classNames(
                " border-b border-black p-3",
                index < 6 ? "border-r" : ""
              )}
            >
              <div className="text-center font-bold text-xl w-full capitalize ">
                {format(date, "EEEE", { locale: fr })}
              </div>
              <div className="w-full text-center text-blue-400">
                {format(date, "dd-MM-yyyy")}
              </div>
            </div>
            <div
              className={classNames(
                "flex-1 border-black p-3 gap-2 flex flex-col",
                index < 6 ? "border-r" : ""
              )}
            >
              {/* {agenda
                .filter((agendaItem) =>
                  isSameDay(stringToDate(agendaItem.start), date)
                )
                .map((agendaItem, index) => (
                  <div key={index} className="bg-blue-400 text-white rounded">
                    <div className="text-center w-full text-lg">
                      {agendaItem.name}
                    </div>
                    <div className="text-center w-full text-sm opacity-80">
                      {format(stringToDate(agendaItem.start), "HH") +
                        ":" +
                        format(stringToDate(agendaItem.start), "mm") +
                        " à " +
                        format(stringToDate(agendaItem.end), "HH") +
                        ":" +
                        format(stringToDate(agendaItem.end), "mm")}
                    </div>
                  </div>
                ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Parent;

const getDays: () => Date[] = () => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(add(new Date(), { days: i }));
  }
  return days;
};

const stringToDate = (dateString: string) => {
  const dateTimePart = dateString.split(", ");
  const dateParts = dateTimePart[0].split("/").map((e) => parseInt(e));

  const hours = dateTimePart[1]?.split(":")[0];
  const minutes = dateTimePart[1]?.split(":")[1];

  return new Date(
    +dateParts[2],
    dateParts[1] - 1,
    +dateParts[0],
    hours ? parseInt(hours) : undefined,
    minutes ? parseInt(minutes) : undefined
  );
};
