import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    borderBottomStyle: 'solid'
  },
  schoolInfo: {
    width: '60%'
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5
  },
  schoolAddress: {
    fontSize: 10,
    color: '#7f8c8d'
  },
  receiptTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 5
  },
  receiptSubtitle: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20
  },
  studentInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db'
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8
  },
  infoLabel: {
    width: 120,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  infoValue: {
    fontSize: 12,
    color: '#34495e'
  },
  paymentDetails: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
    paddingBottom: 5
  },
  table: {
    display: 'flex',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dfe6e9'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9'
  },
  tableColHeader: {
    width: '70%',
    padding: 8,
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
  },
  tableColHeaderAmount: {
    width: '30%',
    padding: 8,
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'right'
  },
  tableCol: {
    width: '70%',
    padding: 8,
    fontSize: 12
  },
  tableColAmount: {
    width: '30%',
    padding: 8,
    fontSize: 12,
    textAlign: 'right'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  totalLabel: {
    width: '70%',
    padding: 8,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  totalValue: {
    width: '30%',
    padding: 8,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    borderTopWidth: 1,
    borderTopColor: '#2c3e50'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#95a5a6',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
    paddingTop: 10
  },
  signature: {
    width: 200,
    marginTop: 30,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#bdc3c7',
    textAlign: 'center',
    fontSize: 12
  },
  date: {
    fontSize: 10,
    color: '#7f8c8d',
    marginBottom: 20,
    textAlign: 'right'
  }
});

const MyDocument = ({ studentData, pdfdata }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.schoolInfo}>
          <Text style={styles.schoolName}>Nawa Tara English School</Text>
          <Text style={styles.schoolAddress}>Biratnagar, Nepal</Text>
          <Text style={styles.schoolAddress}>Phone: 01-4500000 | Email: satyalsamriddha@gmail.com</Text>
        </View>
        <View>
          <Image src="/school-logo.png" style={{ width: 80, height: 80 }} />
        </View>
      </View>

      <Text style={styles.receiptTitle}>FEE RECEIPT</Text>

      <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>

      <View style={styles.studentInfo}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Student Name:</Text>
          <Text style={styles.infoValue}>{studentData.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Father's Name:</Text>
          <Text style={styles.infoValue}>{studentData.father_name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Mother's Name:</Text>
          <Text style={styles.infoValue}>{studentData.mother_name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Class:</Text>
          <Text style={styles.infoValue}>{studentData.class_name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>{studentData.address}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contact:</Text>
          <Text style={styles.infoValue}>
            {studentData.father_phone || studentData.mother_phone}
          </Text>
        </View>
      </View>

      <View style={styles.paymentDetails}>
        <Text style={styles.sectionTitle}>FEE DETAILS FOR {pdfdata.month.toUpperCase()}</Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}><Text>Particulars</Text></View>
            <View style={styles.tableColHeaderAmount}><Text>Amount (₹)</Text></View>
          </View>
          
          {pdfdata.adm_fee > 0 && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text>Admission Fee</Text></View>
              <View style={styles.tableColAmount}><Text>{pdfdata.adm_fee}</Text></View>
            </View>
          )}
          
          {pdfdata.month_fee > 0 && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text>Monthly Tuition Fee</Text></View>
              <View style={styles.tableColAmount}><Text>{pdfdata.month_fee}</Text></View>
            </View>
          )}
          
          {pdfdata.comp_fee > 0 && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}><Text>Computer Lab Charges</Text></View>
              <View style={styles.tableColAmount}><Text>{pdfdata.comp_fee}</Text></View>
            </View>
          )}
        </View>
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Fees Paid:</Text>
          <Text style={styles.totalValue}>{pdfdata.total}</Text>
        </View>
      </View>

      <View style={styles.signature}>
        <Text>Authorized Signature</Text>
        <View style={{height: 30}}></View>
        <Text>__________________________</Text>
      </View>

      <View style={styles.footer} fixed>
        <Text>This is a computer generated receipt. No signature required.</Text>
        <Text>Receipt No: {Math.floor(100000 + Math.random() * 900000)}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;