# Beacon Class
# koki 15072015

class Beacon:

	""" private vars """
	uuid = "N/A"
	macs = []
	major = 0
	minor = 0
	txpower = 0
	rssi = 0

	def __init__(self,uuid,mac,major,minor,txpower,rssi):
		self.uuid = uuid
		self.macs.append(mac);
		self.major = major
		self.minor = minor
		self.txpower = txpower
		self.rssi = rssi

	def __str__(self):
		string = "-------------\n"
		string += "\tUDID: " + self.uuid
		string += "\tMAJOR: " + str(self.major)
		string += "\tMINOR: " + str(self.minor)
		string += "\t(Unknown): " + str(self.txpower)
		string += "\tRSSI:" + str(self.rssi)
		string += "\tMAC address: "
		for mac in self.macs:
			string += mac + ","
		return string

	def addMACadr(self,mac):
		if mac in self.macs:
			pass
		else:
			self.macs.append(mac)
