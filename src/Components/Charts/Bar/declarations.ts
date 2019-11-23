import { ApexOptions, ChartSerie } from "../declarations";

export type BarChartType = "bar" | "line";

export interface BarChart {
  type?: BarChartType,
  series: ChartSerie[],
  options: ApexOptions
}