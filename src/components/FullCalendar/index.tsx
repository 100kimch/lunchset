import { Badge, Calendar } from "antd";
import React from "react";

import type { BadgeProps, CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "찰보리밥" },
        { type: "success", content: "깍두기" }
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "찰보리밥" },
        { type: "success", content: "깍두기" },
        { type: "error", content: "소고기육전" }
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "백미밥" },
        { type: "success", content: "삼겹살" },
        { type: "error", content: "배추김치" },
        { type: "error", content: "요구르트" }
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const FullCalendar: React.FC = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ padding: 0 }}>
        {listData.map((item) => (
          <li key={item.content} style={{ listStyle: "none" }}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};
