import { GarageItem } from "../types/garage";
import { ServerPromiseResp } from "../types/common";

/*const mapped = {
	car: [
		{
			"owner": "char1:8726607ccd79d786894f19d41a95a27554fe84b6",
			"plate": "EVE 599",
			"vehicle": "{\"model\":884483972,\"plate\":\"EVE 599\"}",
			"type": "car",
			"job": "",
			"stored": false,
			"parking": null,
			"pound": ""
		}
	]
}*/

export const MockGarage: GarageItem[] = [
	{
		"owner": "char1:8726607ccd79d786894f19d41a95a27554fe84b6",
		"plate": "EVE 599",
		"vehicle": "{\"model\":884483972,\"plate\":\"EVE 599\"}",
		"type": "car",
		"job": "",
		"stored": false,
		"parking": null,
		"pound": ""
	},
	{
		"owner": "char1:8726607ccd79d786894f19d41a95a27554fe84b6",
		"plate": "VSX 150",
		"vehicle": "{\"modFrontBumper\":-1,\"modAerials\":-1,\"modAirFilter\":-1,\"bodyHealth\":956,\"windowTint\":-1,\"xenonColor\":255,\"plate\":\"VSX 150\",\"modEngineBlock\":-1,\"neonEnabled\":[false,false,false,false],\"modDoorR\":-1,\"pearlescentColor\":24,\"modSeats\":-1,\"modShifterLeavers\":-1,\"modSmokeEnabled\":false,\"modArmor\":-1,\"modLightbar\":-1,\"modTrimA\":-1,\"modDashboard\":-1,\"modTransmission\":-1,\"tankHealth\":995.3,\"modExhaust\":-1,\"modTank\":-1,\"dirtLevel\":4.1,\"modPlateHolder\":-1,\"extras\":[],\"modVanityPlate\":-1,\"modRightFender\":-1,\"modFrontWheels\":-1,\"modTurbo\":false,\"color2\":1,\"modDial\":-1,\"modXenon\":false,\"doorsBroken\":{\"4\":false,\"3\":false,\"2\":false,\"1\":false,\"0\":false},\"modSideSkirt\":-1,\"modTrunk\":-1,\"modTrimB\":-1,\"modBackWheels\":-1,\"tyreBurst\":{\"4\":false,\"5\":false,\"1\":false,\"0\":false},\"modOrnaments\":-1,\"modLivery\":-1,\"engineHealth\":936,\"plateIndex\":0,\"modBrakes\":-1,\"modHood\":-1,\"modSuspension\":-1,\"modFender\":-1,\"modAPlate\":-1,\"wheels\":0,\"modEngine\":-1,\"modHydrolic\":-1,\"modRearBumper\":-1,\"modRoof\":-1,\"modSpoilers\":-1,\"color1\":2,\"model\":330661258,\"windowsBroken\":{\"7\":false,\"6\":false,\"5\":true,\"4\":true,\"3\":false,\"2\":false,\"1\":false,\"0\":false},\"modFrame\":-1,\"wheelColor\":156,\"modGrille\":-1,\"fuelLevel\":65,\"modHorns\":-1,\"modSpeakers\":-1,\"neonColor\":[255,0,255],\"tyreSmokeColor\":[255,255,255],\"modDoorSpeaker\":-1,\"modStruts\":-1,\"modArchCover\":-1,\"modSteeringWheel\":-1}",
		"type": "car",
		"job": "",
		"stored": true,
		"parking": "Legion square",
		"pound": ""
	},
	{
		"owner": "char1:8726607ccd79d786894f19d41a95a27554fe84b6",
		"plate": "VSX 150",
		"vehicle": "{\"modFrontBumper\":-1,\"modAerials\":-1,\"modAirFilter\":-1,\"bodyHealth\":956,\"windowTint\":-1,\"xenonColor\":255,\"plate\":\"VSX 150\",\"modEngineBlock\":-1,\"neonEnabled\":[false,false,false,false],\"modDoorR\":-1,\"pearlescentColor\":24,\"modSeats\":-1,\"modShifterLeavers\":-1,\"modSmokeEnabled\":false,\"modArmor\":-1,\"modLightbar\":-1,\"modTrimA\":-1,\"modDashboard\":-1,\"modTransmission\":-1,\"tankHealth\":995.3,\"modExhaust\":-1,\"modTank\":-1,\"dirtLevel\":4.1,\"modPlateHolder\":-1,\"extras\":[],\"modVanityPlate\":-1,\"modRightFender\":-1,\"modFrontWheels\":-1,\"modTurbo\":false,\"color2\":1,\"modDial\":-1,\"modXenon\":false,\"doorsBroken\":{\"4\":false,\"3\":false,\"2\":false,\"1\":false,\"0\":false},\"modSideSkirt\":-1,\"modTrunk\":-1,\"modTrimB\":-1,\"modBackWheels\":-1,\"tyreBurst\":{\"4\":false,\"5\":false,\"1\":false,\"0\":false},\"modOrnaments\":-1,\"modLivery\":-1,\"engineHealth\":936,\"plateIndex\":0,\"modBrakes\":-1,\"modHood\":-1,\"modSuspension\":-1,\"modFender\":-1,\"modAPlate\":-1,\"wheels\":0,\"modEngine\":-1,\"modHydrolic\":-1,\"modRearBumper\":-1,\"modRoof\":-1,\"modSpoilers\":-1,\"color1\":2,\"model\":330661258,\"windowsBroken\":{\"7\":false,\"6\":false,\"5\":true,\"4\":true,\"3\":false,\"2\":false,\"1\":false,\"0\":false},\"modFrame\":-1,\"wheelColor\":156,\"modGrille\":-1,\"fuelLevel\":65,\"modHorns\":-1,\"modSpeakers\":-1,\"neonColor\":[255,0,255],\"tyreSmokeColor\":[255,255,255],\"modDoorSpeaker\":-1,\"modStruts\":-1,\"modArchCover\":-1,\"modSteeringWheel\":-1}",
		"type": "aircraft",
		"job": "",
		"stored": true,
		"parking": "That harbor",
		"pound": ""
	},
	{
		"owner": "char1:8726607ccd79d786894f19d41a95a27554fe84b6",
		"plate": "EVE 599",
		"vehicle": "{\"model\":884483972,\"plate\":\"EVE 599\"}",
		"type": "boat",
		"job": "",
		"stored": false,
		"parking": null,
		"pound": ""
	},
]
export const buildRespObj = (
	data: any,
	status?: 'ok' | 'error',
	errorMsg?: string,
): ServerPromiseResp<any> => ({
	data,
	status,
	errorMsg,
});
