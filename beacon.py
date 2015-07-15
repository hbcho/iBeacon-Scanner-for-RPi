# Beacon Class
# koki 15072015

class Beacon:

	""" private vars """
	uuid = "N/A"
	mac = "00:00:00:00:00:00"
	major = 0
	minor = 0
	txpower = 0
	rssi = 0

	def __init__(self,uuid,mac,major,minor,txpower,rssi):
		self.uuid = uuid
		self.mac = mac
		self.major = major
		self.minor = minor
		self.txpower = txpower
		self.rssi = rssi

	def __str__(self):
		print "-------------"
		print "\tUDID: ", self.uuid
		print "\tMAC address: ", self.mac
		print "\tMAJOR: ", self.major
		print "\tMINOR: ", self.minor
		print "\t(Unknown):", self.txpower
		print "\tRSSI:", self.rssi
