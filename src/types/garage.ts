export interface GarageItem {
	owner: string;
	plate: string;
	vehicle: string;
	type: 'car' | 'aircraft' | 'boat';
	job: string;
	stored: boolean;
	parking: string | null;
	pound: string;
}
