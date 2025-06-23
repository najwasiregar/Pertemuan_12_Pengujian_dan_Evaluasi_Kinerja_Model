const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';

async function main() {
  try {
    await client.connect();
    console.log('Berhasil terhubung ke MongoDB database server');

    const db = client.db(namaDatabase);

    // Ambil data berdasarkan kriteria tertentu (misalnya nama 'Rudi')
    const pengguna = await db.collection('pengguna').findOne({ nama: 'Rudi' });

    if (pengguna) {
      console.log('Data Pengguna ditemukan:', pengguna);
    } else {
      console.log('Data Pengguna tidak ditemukan');
    }
  } catch (err) {
    console.error('Terjadi kesalahan:', err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
