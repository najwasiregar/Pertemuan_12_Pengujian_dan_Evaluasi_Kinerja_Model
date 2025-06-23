import pandas as pd
import matplotlib.pyplot as plt

# Baca data dari file CSV
try:
    df = pd.read_csv('data_penjualan.csv')
except FileNotFoundError:
    print("Error: File 'data_penjualan.csv' tidak ditemukan.")
except Exception as e:
    print(f"Error: {e}")

# Tampilkan 5 data pertama dan terakhir
print("5 Data Pertama:")
print(df.head())
print("\n5 Data Terakhir:")
print(df.tail())

# Hitung jumlah produk yang terjual
total_produk = df['jumlah_terjual'].sum()
print("\nTotal produk terjual:", total_produk)

# Cari produk dengan harga tertinggi dan terendah
produk_termahal = df.loc[df['harga'].idxmax()]
produk_termurah = df.loc[df['harga'].idxmin()]
print("\nProduk dengan harga tertinggi:")
print(produk_termahal)
print("\nProduk dengan harga terendah:")
print(produk_termurah)

# Kelompokkan data berdasarkan jenis produk dan hitung total penjualan masing-masing jenis
penjualan_per_jenis = df.groupby('jenis_produk')['jumlah_terjual'].sum()
print("\nTotal penjualan per jenis produk:")
print(penjualan_per_jenis)

# Visualisasi: Bar Chart jumlah penjualan setiap produk
df.plot(kind='bar', x='nama_produk', y='jumlah_terjual', title='Jumlah Penjualan Setiap Produk')
plt.ylabel('Jumlah Terjual')
plt.show()

# Visualisasi: Pie Chart proporsi penjualan per jenis produk
penjualan_per_jenis.plot(kind='pie', autopct='%1.1f%%', title='Proporsi Penjualan per Jenis Produk')
plt.ylabel('')
plt.show()
