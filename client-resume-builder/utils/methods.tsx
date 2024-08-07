export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month}-${year}`;
}

export const ulToArray = (htmlContent: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const ulElement = doc.querySelector("ul");
  if (!ulElement) {
    const liElements = doc.querySelectorAll("p");
    const liArray = Array.from(liElements).map((li) => li.innerHTML);
    const filterListArr = liArray.filter((el) => !el.includes("<"));
    console.log(liArray);
    return filterListArr;
  }

  const liElements = ulElement.querySelectorAll("li");
  const liArray = Array.from(liElements).map((li) => li.innerHTML);

  return liArray;
};
