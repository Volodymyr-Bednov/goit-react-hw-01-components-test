export const StatisticsItem = ({ data }) => {
  //console.log(data);
  const { label, percentage } = data;
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};
