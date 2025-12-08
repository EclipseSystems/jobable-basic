import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	ColorPicker,
	ColorPickerAlphaSlider,
	ColorPickerArea,
	ColorPickerContent,
	ColorPickerEyeDropper,
	ColorPickerFormatSelect,
	ColorPickerHueSlider,
	ColorPickerInput,
	ColorPickerSwatch,
	ColorPickerTrigger,
} from '@/components/ui/color-picker';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PageTitle } from '@/components/pageTitle'
import { ChevronLeft } from 'lucide-react';

export default function ReportBuilder() {
	return (
		<>
			<PageTitle title={'Report builder'} padding={false} />
			<div className={'flex space-y-4'}>
				<Button variant={'outline'} size={'icon'}><ChevronLeft /></Button>
				<Button className={'ml-auto'}>Save</Button>
			</div>
			
			<Card>
				<CardContent>

					<Label htmlFor={'email'}>Report title</Label>
					<Input />
					<Label htmlFor={'email'}>Select a table</Label>
					<Select>
						<SelectTrigger className={'w-[180px]'}>
							<SelectValue placeholder={'Theme'} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={'clients'}>Clients</SelectItem>
							<SelectItem value={'appointments'}>Appointments</SelectItem>
							<SelectItem value={'leads'}>Leads</SelectItem>
							<SelectItem value={'contacts'}>Contacts</SelectItem>
							<SelectItem value={'organisations'}>Organisations</SelectItem>
						</SelectContent>
					</Select>
					Bar chart
					Pie chart
					Doughnut
					X axis
					<ColorPicker defaultFormat={'hex'} defaultValue={'#3b82f6'}>
						<ColorPickerTrigger asChild>
							<ColorPickerSwatch />
						</ColorPickerTrigger>
						<ColorPickerContent>
							<ColorPickerArea />
							<div className={'flex items-center gap-2'}>
								<ColorPickerEyeDropper />
								<div className={'flex flex-1 flex-col gap-2'}>
									<ColorPickerHueSlider />
									<ColorPickerAlphaSlider />
								</div>
							</div>
							<div className={'flex items-center gap-2'}>
								<ColorPickerFormatSelect />
								<ColorPickerInput />
							</div>
						</ColorPickerContent>
					</ColorPicker>
					Y axis

				</CardContent>
			</Card>
		</>
	)
}