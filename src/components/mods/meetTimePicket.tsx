import {
  TimePicker,
  TimePickerContent,
  TimePickerHour,
  TimePickerInput,
  TimePickerInputGroup,
  TimePickerMinute,
  TimePickerPeriod,
  TimePickerSeparator,
  TimePickerTrigger,
} from "@/components/ui/time-picker";
 
export function MeetTimePicker() {
  return (
    <TimePicker
      minuteStep={15}
      showSeconds={false}
      locale={'en-AU'}
    >
      <TimePickerInputGroup>
        <TimePickerInput segment="hour" />
        <TimePickerSeparator />
        <TimePickerInput segment="minute" />
        <TimePickerInput segment="period" />
        <TimePickerTrigger />
      </TimePickerInputGroup>
      <TimePickerContent>
        <TimePickerHour format={'2-digit'} />
        <TimePickerMinute format={'2-digit'} />
        <TimePickerPeriod />
      </TimePickerContent>
    </TimePicker>
  );
}