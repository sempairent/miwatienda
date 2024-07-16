import React, { useState } from 'react';

const productos = [
  {
    nombre: "Leche",
    precio: 3.50,
    imagen: "data:image/jpeg;base64,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"
  },
  {
    nombre: "Pan",
    precio: 1.00,
    imagen: "data:image/jpeg;base64,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"
  },
  {
    nombre: "Café",
    precio: 2.00,
    imagen: "data:image/jpeg;base64,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"
  }
];

const App = () => {
  const [carrito, setCarrito] = useState({});
  const [cliente, setCliente] = useState({
    numDoc: '76949374',
    rznSocial: 'Edgar Antonio Flores',
    direccion: 'Av. geranios',
    provincia: 'LIMA',
    departamento: 'LIMA',
    distrito: 'LIMA',
    ubigueo: '150101'
  });
  const [mensaje, setMensaje] = useState('');

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => ({
      ...prevCarrito,
      [producto.nombre]: (prevCarrito[producto.nombre] || 0) + 1,
    }));
  };

  const quitarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const nuevaCantidad = (prevCarrito[producto.nombre] || 0) - 1;
      if (nuevaCantidad <= 0) {
        const { [producto.nombre]: _, ...rest } = prevCarrito;
        return rest;
      }
      return {
        ...prevCarrito,
        [producto.nombre]: nuevaCantidad,
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const realizarCompra = async () => {
    const carritoFiltrado = Object.entries(carrito).filter(([_, cantidad]) => cantidad > 0);
    if (carritoFiltrado.length === 0) {
      setMensaje('Debe seleccionar al menos un producto.');
      return;
    }

    const detalles = carritoFiltrado.map(([nombre, cantidad]) => {
      const producto = productos.find(p => p.nombre === nombre);
      return {
        codProducto: producto.nombre.toUpperCase(),
        unidad: 'NIU',
        descripcion: producto.nombre.toUpperCase(),
        cantidad: parseInt(cantidad),
        mtoValorUnitario: parseFloat((producto.precio / 1.18).toFixed(2)),
        mtoValorVenta: parseFloat(((producto.precio / 1.18) * cantidad).toFixed(2)),
        mtoBaseIgv: parseFloat(((producto.precio / 1.18) * cantidad).toFixed(2)),
        porcentajeIgv: 18,
        igv: parseFloat((((producto.precio / 1.18) * cantidad) * 0.18).toFixed(2)),
        tipAfeIgv: 10,
        totalImpuestos: parseFloat((((producto.precio / 1.18) * cantidad) * 0.18).toFixed(2)),
        mtoPrecioUnitario: parseFloat(producto.precio.toFixed(2)),
      };
    });

    const valorVenta = detalles.reduce((acc, item) => acc + item.mtoValorVenta, 0);
    const totalImpuestos = detalles.reduce((acc, item) => acc + item.totalImpuestos, 0);
    const total = valorVenta + totalImpuestos;

    const data = {
      ublVersion: "2.1",
      tipoOperacion: "0101",
      tipoDoc: "03",
      serie: "B001",
      correlativo: "1",
      fechaEmision: "2021-01-27T00:00:00-05:00",
      formaPago: {
        moneda: "PEN",
        tipo: "Contado"
      },
      tipoMoneda: "PEN",
      client: {
        tipoDoc: "6",
        numDoc: cliente.numDoc,
        rznSocial: cliente.rznSocial,
        address: {
          direccion: cliente.direccion,
          provincia: cliente.provincia,
          departamento: cliente.departamento,
          distrito: cliente.distrito,
          ubigueo: cliente.ubigueo
        }
      },
      company: {
        ruc: 10769496251,
        razonSocial: "Empresa de Midward",
        nombreComercial: "Mi empresa",
        address: {
          direccion: "Direccion empresa",
          provincia: "LIMA",
          departamento: "LIMA",
          distrito: "LIMA",
          ubigueo: "150101"
        }
      },
      mtoOperGravadas: valorVenta.toFixed(2),
      mtoIGV: totalImpuestos.toFixed(2),
      valorVenta: valorVenta.toFixed(2),
      totalImpuestos: totalImpuestos.toFixed(2),
      subTotal: total.toFixed(2),
      mtoImpVenta: total.toFixed(2),
      details: detalles,
      legends: [
        {
          code: "1000",
          value: `SON ${total.toFixed(2)} CON 00/100 SOLES`
        }
      ]
    };

    try {
      const response = await fetch('https://facturacion.apisperu.com/api/v1/invoice/pdf', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6InZhbGVudGluZSIsImNvbXBhbnkiOiIxMDc2OTQ5NjI1MSIsImlhdCI6MTcyMTA4NDU3NCwiZXhwIjo4MDI4Mjg0NTc0fQ.Z0Row2MVbXU4RuYAwUckqy8H1-jvIdv8vhTM-8855j-DNc5oK67HQ-Y_YVQHhO5wl8eLLuwZIyKudFbcI0yZahn6LSOt5LgmY1BF8dTKe72Qwtp-jNenGCBFHyucupyUhRl04_5yiDDd5NDWQzCR3ZZR4zk8Fn06R0ZbXfqo6dgLsT5GWM8RqsS9JbTaBcac3tUiiFjqnb2ISsne8P6ZdPGHRrwnSffhbPPyi-yskOtDISTMQST-5snrQ3ltxnv3Vtet_bmtKfFK9lvUi8YEkEBFrvzsNUxJ-ypRccDLGK79HDFauhlmSYU8azLy-wcUXLuKvqDeRj1MMZ35bk3IzVBaVezIIF3XsnxKvpNd9Q5nF0w9bE8p60erBBDSABwi2WJrl7qLOITy18j7mw0gxfyHhaI0Qg14_XnWH60L8M5ATeA_HTSzjRHhLEwc05NWsvZ4IxT62pjUbxFudJR9p-uhXBafgaxov3NJh_ask1aIsbIS_wzP3CvFFU-s54V9z-9FSRPw-lUD_AKOZjVAVfGyIOn3F2HY9N5uMZjuaWcJXn3UCiT7DDNVPkV3sueAdmTUrqemUtphxxeGqXgN3J5lr-PiTNT74u4RVDTb8mRO58bHTLIV2RyrhaIDUUzDNGewMAeclrq3NYyefsD1ypuLnIR1aRT34w_NHT7ZsvY',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'factura.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setMensaje('PDF guardado correctamente.');
      } else {
        setMensaje(`Error en la petición: ${response.status}`);
      }
    } catch (error) {
      setMensaje('Error en la petición: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tienda</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.nombre} className="border p-4 rounded-lg">
            <img src={producto.imagen} alt={producto.nombre} className="mb-2 w-full h-32 object-cover" />
            <h2 className="text-xl font-bold">{producto.nombre}</h2>
            <p className="text-gray-700">Precio: S/{producto.precio.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => quitarProducto(producto)}
                className="bg-red-500 text-white py-1 px-2 rounded mr-2"
              >
                -
              </button>
              <span>{carrito[producto.nombre] || 0}</span>
              <button
                onClick={() => agregarProducto(producto)}
                className="bg-green-500 text-white py-1 px-2 rounded ml-2"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Datos del Cliente</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="numDoc"
            value={cliente.numDoc}
            onChange={handleInputChange}
            placeholder="Número de Documento"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="rznSocial"
            value={cliente.rznSocial}
            onChange={handleInputChange}
            placeholder="Razón Social"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="direccion"
            value={cliente.direccion}
            onChange={handleInputChange}
            placeholder="Dirección"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="provincia"
            value={cliente.provincia}
            onChange={handleInputChange}
            placeholder="Provincia"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="departamento"
            value={cliente.departamento}
            onChange={handleInputChange}
            placeholder="Departamento"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="distrito"
            value={cliente.distrito}
            onChange={handleInputChange}
            placeholder="Distrito"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="ubigueo"
            value={cliente.ubigueo}
            onChange={handleInputChange}
            placeholder="Ubigueo"
            className="border p-2 rounded"
          />
        </form>
      </div>
      <button
        onClick={realizarCompra}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Comprar
      </button>
      {mensaje && <p className="mt-4 text-red-500">{mensaje}</p>}
    </div>
  );
};

export default App;
