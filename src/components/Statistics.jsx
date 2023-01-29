import { StatisticsItem } from './StatisticsItem';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};
