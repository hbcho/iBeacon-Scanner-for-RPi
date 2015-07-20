# test BLE Scanning software
# koki 15072015

import blescan
import sys
import json

import bluetooth._bluetooth as bluez
from beacon import Beacon

allBeacons = {}
dev_id = 0
try:
	sock = bluez.hci_open_dev(dev_id)
	print "ble thread started"

except:
	print "error accessing bluetooth device..."
	sys.exit(1)

blescan.hci_le_set_scan_parameters(sock)
blescan.hci_enable_le_scan(sock)




while True:
	returnedList = blescan.parse_events(sock, 10)
	for beac in returnedList:
		#print beac
		uuid = beac['uuid']
		"""if uuid in allBeacons:
			b = allBeacons[uuid]
			b.addMACadr(beac['mac'])
			b.updateData(beac['txp'],beac['rssi'])
		else:
			b = Beacon(uuid,beac['mac'],beac['major'],beac['minor'],beac['txp'],beac['rssi'])
			allBeacons[uuid] = b"""
		
		allBeacons[uuid] = beac


	"""for bee in allBeacons:
		print allBeacons[bee]"""

	with open('beacons.json','w') as of:
		json.dump(allBeacons,of)
