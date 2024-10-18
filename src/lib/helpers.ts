export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTimeForChina(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 使用24小时制，因为中国通常使用24小时制
    timeZone: "Asia/Shanghai",
  };

  let formattedTime = new Intl.DateTimeFormat("zh-CN", options).format(date);

  // 添加中国标准时间缩写
  formattedTime += " CST";

  return formattedTime;
}

export function getCurrentTimeInChina(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
}
