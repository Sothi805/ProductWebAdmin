

import { CustomAsyncSelect2 } from '@/interface/select2/CustomAsyncSelect'
import { SelectProps } from '@/type';

export default function SaleryUnit(props: SelectProps) {
  const state = [
    { label: "Biweekly", value: "B" },
    { label: "Day", value: "D" },
    { label: "Hour", value: "H" },
    { label: "Month", value: "scu_Month" },
    { label: "Semimonthly", value: "S" },
    { label: "Week", value: "W" },
    { label: "Year", value: "Y" },
    // { name: "Male", value: "gt_Male" },
  ]

  return (
    <>
      <CustomAsyncSelect2
        options={state}
        perPage={10}
        placeholder='Unit'
        optionLabel='label'
        optionValue='value'
        onChange={props?.onChange}
      />
    </>
  )
}
