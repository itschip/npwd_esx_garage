RegisterNUICallback("npwd:esx-garage:getVehicles", function(_, cb)
	TriggerServerEvent("npwd:esx-garage:getVehicles")

	RegisterNetEvent("npwd:esx-garage:sendVehicles", function(vehicles)
		cb({ status = "ok", data = vehicles })
	end)
end)

RegisterNUICallback("npwd:esx-garage:requestWaypoint", function(data, cb)
	print("nui data", json.encode(data))
	local garage_name = data.parking
	local vehicle_type = data.type

	if vehicle_type == "boat" then
		local boat_garages = exports["esx_boat"]:getGarages()
		local closestPos = GetClosestGarage(boat_garages)

		SetNewWaypoint(closestPos.x, closestPos.y)
		return cb({})
	end

	-- if type is `car`
	local garages = exports["esx_garage"]:getGarages()
	SetNewWaypoint(garages[garage_name].EntryPoint.x, garages[garage_name].EntryPoint.y)

	cb({})
end)

function GetClosestGarage(garages)
	local player_coords = GetEntityCoords(PlayerPedId())

	local closestDistance = -1
	local closestPos
	for _, v in ipairs(garages) do
		local distance = #(player_coords - v.GaragePos)
		print("distance", distance)

		if closestDistance == -1 or distance < closestDistance then
			closestDistance = distance
			closestPos = v.GaragePos
		end
	end

	return closestPos
end
