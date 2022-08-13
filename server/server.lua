RegisterNetEvent("npwd:esx-garage:getVehicles", function()
	local src = source
	local xPlayer  = ESX.GetPlayerFromId(src)

	local result = MySQL.query.await('SELECT * from owned_vehicles WHERE owner = ?', {xPlayer.identifier})
	print(json.encode(result))

	TriggerClientEvent('npwd:esx-garage:sendVehicles', src, result)
end)
