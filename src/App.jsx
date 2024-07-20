import React, { useState } from 'react';

const productos = [
  {
    nombre: "LUKATHER",
    precio: 299.00,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaZWxH65Qt3bXiakqxnbm0awiZuOmXzWrAg&s"
  },
  {
    nombre: "SRV",
    precio: 349.00,
    imagen: "data:image/jpeg;base64,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"
  },
  {
    nombre: "BORLAND",
    precio: 329.00,
    imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhITEhISFhIXGBoXFhgYGBcVFRgVFxUXFhUXFRUYHSggHRolHRcVITEhJSorLi46Fx8zODMsNygtLisBCgoKDg0OGhAQGisgHyUtLS0tLS0tLS0tLS0rKy0tLS0uLS0tLS0rLS0tLS0tLS0tLS0tLS0uNy0tLS0tLS0tLf/AABEIAIgBcQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABHEAACAQIDBAYHBQUFBwUAAAABAgADEQQSIQUGMUEHEyIyUWEUQlJxgZGhIzOSscFDU2Jy0iSC0eHwFzRjg5Oy8RZUoqPC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB8RAQEBAAICAwEBAAAAAAAAAAABERJRAiExQWETA//aAAwDAQACEQMRAD8AnGIiAiIgImL2/vBhsFTNXE1VReV+8x8FXiTIZ3n6aq9UlMDSFJOHWVNXPmF4CTVxO9Sqqi7MAPMgD6zG195MGmj4mgD5us5X2ltzFYg5sRia9Q+GYhfwjT6SwWknsA+8n9DGVPTrOnvTgW0XFUCf5xMlh8ZTfuOje4gzkOnh6R40h8C4/WZXAU8hBo18RQbllYsvxXS8ZTY6uiQPsbf7auEA60LjKA4ldKoHiVtf6fGSdulv9g9oAdVUC1OdNtGH+vGN7XG1RESoREQERKGLxdOkpao6oo5sbCBXiYBd8sCTYV1v7jb5zM4bFJUAZGDDxBvJsMVoiJQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICab0i7+0dmUraPiXH2dO/8A8n8FEym+m8tPZ2FqYipqRoi83c91ROU9sbWq4uvUxFdi1RzcnkByC+AHASfKq23Nt18ZVNbE1C7ngD3VHgq8h/o3lkDKYlVBNI9Ksv3Tq6AdVDVHqFFuMwUKqsxy8CxLqBe/A/ChRWZfCJmXJmykMHQ+y40uR4EaH3Dwiz0SqGDoswUsuViO0LWsbm2nK4sbecy+GwUoenJQsK9OpTvwYDPTb+Vxx91rjnMjhd4MDzrge9Kn9MSpi+wNIqQRcGXmK3eoYkhwxoYoarVTS7cs4HH3ix85j6m9Wz0BPXs59lKbk/Nwq/WVsFvDh6qq1OsgJ9R2COD4WbQ+8XmdakZzYvSFjNmuuH2ohekdErqLgjxuOPu4jw5yXNl7Vo4lFqUaiuhFwQQZCGP2yerNOtTWpSb1XW6nzF/zE1mhjkwzF8JXxOGPgrCpT+KNx+JMZ0b26ilDGYynSUvUdUUaksQAB7zOeD0m49Rb01m/5ChvmXI+k1fbO82IxJvUqVKh5F2zW/lQAID52v5x7T0mTe3phoUQVwi9a/JzonvUcSPPhId2xvFjdo1ftKjsSdFUkAfATF4TBPWb6kngBzJJlfF45KamnQPHR6g0LeSeC+fP3cbPE1XXB4CkctepXapzNAIVQ+BZyMxH8Pzm2bu7xYjA/a0MR6VhARnYXFWlfgK9JjmW9rA6qbWDcjGt5dbPx9Sg4qU2ysLjxDKe8rqdGUjQg6GW+z4dY7rby0sbTDIRmtqL/l/r8iBnZznuVtrqaiVqF1ou+V0BJ6qqdcoJ4qdCpPHgb5Wv0BsrHCtTVxbXjbx8vI6EeREz+KvIiJUIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIMTTeljeX0HZ9VlNqtX7Kl45mBu3wW5gQr0x72+nY006bXw9AlEtwZ+FR/wBB7jNDnxRPpiK9Ce+tAlAtPMouDjG5WH1nj0l/ab4G35SjPsiMhhtt4hAQKrZTxU2ZT7wRrLvC7Vw7EDEYSkR7VLNScfBTYzCRCt3o7vYLEZThcRa57SVLZ1H8NgL+Fj85dV9wEt94x92Uf/kzQFPPnMrg95MVS0Ws1vBrMPrrGQ2s0d2non7KtXT3WIPvAygiW+KwTqpaoVZRa9RVKFbmwNWnwy3IGZeF9b3Epf8ArTFf8I/3P85WxG2sTWw4s187VEq5FsAtlCoQBwYMxvxNtO6YuRJqiuwqp1y2HiSALeN7ym1LDUu/U6xvZp6j4vw+V5jNoVGuqEmyKqkXuAQNRbhpw+EtJdMZDHbUaoMgASn7C8D5seLH6eUsCYEGFJ9nkSrSpliAASSQLAXJJ0AA5k+EDK7s13WrlRXc1OwKa6539XTyuTfl5ayeNzdk44NRfP8A2cGkDZyM5pUStStl5qWBQccwytwAMwfRbuBk+0rL2u7UPJfHD0zzP7xx/INc1piRQAAAABoANBbymPm6fD1ERNIREQEREBERAREQEREBERAREQERLLa+06WGpPWrNlpoLkwL2Ji9g7cp4uklWnmyOuZbixK3tw5Hyl3i8fSpFRUdVLGygnVj4KOJPugXMTzTqBgCpuDwMtaG1KLuyJUVmUgMAb5Se6GPInl4wLyIiAiIgJzr0+7c67HJhlPYw66jl1j2J+QsPjJz3px1Wjhy9Bc1XNTUdnMAGqKrM2osoUsSeVrzlDb2POJxWJrk36yq7D+Uscv0tJ9qsLTxUMqESg8o8z7aAJ9gZPZm7mLxClqOHrOo9ZVJXXh2uHI/KZ7AblGmL48VqJY2pqMtza2ZmNmAGoHLnPex65XBMtyA70PvgWpk/am+H0tm8DyuddZVdjnbsued9QL34AXEJq23l3RSlTptheuqEkhlNmIUAWYZVB43HOanh6V3VWzWvY273nYHnJe21tSpSwOErU6mV6eYAsCQLuOa3IOnL585HmCxbVcUju+HZ3qhmPVnMWZ7k3NPjcwr1R3VrsW+xrAAEi6tdrcFGVT2j56eYlpjtjvRQtVpV0J0TMtlJ53JHG3ITeUHD7n4p+fZlhvYwFI2OHtnX1Tk7j+C8fP3yoj+8y+ydm1KqXo08Qzahur7tuQNlJv5SlmHjg/wv/TNo3aUGidcP3z3Q9u6viOMkVi6u6OIGS2HxDZlB7Kv2Sb9g3pjtC3K414zCY+gq1CqZ8vLPbN/etpeSZSpLlP3F7j2s3wFpTo11FFiUwzNkzZmoq5zNXYFiWQk3HidI8vLDxmox6ufRTkpYrE0g1UCjhQBXCj7Clonauvc8h2vKU61ejlqkUMLpWKqfR6RslmOXucfOZ53pvh+ox6uSHuPstBUpOdCtHOG0BU1GQmoD7QotXYHlkvyl7XqUc2JAoYTsPZf7PT0GdhZuzroBr/jK+F2iEqUwlOgv2YPZpBSD1RYkEAWF7m3mRM3ytmYTwTzhqC01VEAVFACgcABwAlWQVQ3yxQokitbKyoLdYFC5GNrA+Q+Ur1d88UGogVjZlQtrVuS3et2tL/SXl+HD9TdEhKlvriusqKa5sBVsPtLjKjlb9rkQLz7h9+cXaqTWvlS6nt6HrEW57XCxI+IjmnCpsiQrT38xeSoTVFxlto1rEm9xm90U9/8WabN1q5gyjg1rMHvftceyPrHI4VNUSF6e/2MKO3WLcMgGhtZhUvfX+FfrPVDf7GFah6xbqARobauqm/zjmv86maJDWF6QcYxILJorHTxVGYX8tJ5p9IuMJAzJqbfC8cz+dTPEhyv0h41XZbpoxHLkbcLT7X6RMYoQgp2lzG9uOZlsOzw7Mcz+dTFEh2l0i4wrUN0uoBGq63dVN+z/FKf+0nG/wDD+a/0xzP51M0SHsX0i4tHZQyWB0vkvbz7MUukfFkOSVutuGS2ptr2fdHM/nUwzS9sdICUsW+DpYerWrroMpGUvlR8ptdtA45HgZqA6ScX/D80/pmGO23pPX2jTDriW7zE0zSPWWpnKCoAsKS6lueks8tZvhZ8pUwlbE0r4raGISkgBC4emAUF+GdtWepyCqbe+RJvxvu+PqNh8rPhywK00IDAr3bMoOZ+JPFeAF8uY65treOvjGvWrM/K3WqFtzFlVjbyvbyltgGNJ1dLqw5g1L2Is1iFHEEj4yolHc7pAwWEpUsPWp4ik1JQgLrc28WAlLeKvhsZtLCY2lj6DUqRW9Jroy5QzMwZtNSEFuMjrbuOOJqK7sBZAgAyk2BJuSStzqeUu93dp4ahmWqlN1JuxNPM5W1urBDWA538fGX2idE3mwKUmQ42gCQ2qtmy3FgR4+Mjvc3a2E2X6YtXGpiOtdXFRFIZiF7RKXJBux1v6p8pF7Kl+J+Av9SRM7tDa9GrhkpLRQVgyhclPJlAGUi4Y5y2h4cSeOkZT0kbGdNFLrFFKgerzDMzcct9bDSx+fxkobMx9OvSSrSYMjC4P+uc5iO6+IW/XqaAFKpUBcXDdWLlBY9++ljYjUnhJ26L9tYavg6dPD3XqVCMptcHx05H9fdGYbrcYiIGv7/43qNnY2oOIovb3kZR+c5LorpOmumqtl2Rif4ii/Oos5op8JJ8q8tKBlw0oGaHyDEQNt2PdaCE3UNUpWLjOja1dKQy9nja9zY8xL2vhmNRj1eI8L5wPDS1xLXd2g3Uoyo65mU5wOsDhGs/Y9UDNYnlxl7jsEwqO3otXKLjN1+XQaeI004/4SIy+8QI2YNbC5PaAax6wDW1x+fHjNC2I/8AaKPbp99dOrAPEc8kk2rs/PgxTq56auXN7ByFXLdhckNY358iNJG2DZaeLUdajIlW2fIFDKrWzeQIF+MDemUAIQ6kkXIyWAN+F7azD73V81IsXQHOvqAjuuLWKmZqpiqZVAKymwsbslhr6tjwmB3rxa9UAtXXMDZcrGwBBOjeYlRqPWj95T/6S/0zctzLNSYZxbO2opjkimwUATTTiTzqVPgo/rm5bkY5FpvmrMDmbiyo9iijS7HTj9RC1m6WIIBF1117inh8Jinqjqm7X7FT3V/9weUv/Sk/fD8a/wBUwdXbFDKUNatmyZCQpYC1UuGBDagiwmPNr/PPtkMbVXNVsx/3lfVB5Pp/nKOJqDJV1P8AvHsjwqcr/WUU2pSrVMtM4l6lSorqipmYtqOrAza8eM3/AA3RliqlMlqopF3FXKxu66N2GyEj1hqCeEz7b2NKxDjNjO02lT2V/et56z3RYCrS1f7oeqvDqT53E35+i6uTVviEHWG51bsnNmsNNeJHKel6La2ZG9JW6qFt2rEBct72421t/wCYNiM6R+wb7z7xfUHsPyzfWVq/Gh953E9Qe0fPSSEvRI+Qp6ULFg18pvcBha396VX6JichOKtkAUdgkHKSQTr5x7NiOU+/rfeft/2Yt3KnO+v6zxhr5a2lTuewB+1p+esk1eiYB2f0nVs9xkNgKgINu14MZ6o9EqLmHpJ7QynscswbTteKiPZLEYULmlW0qep6gHrHgL6z5Qv1T6VO+nqa8KnK8lSn0TUgGX0hrNa/Y10NxY59Oc9L0TUQpX0h8pIJ7Ot1uBrm4do/SX30cvFFlK/VVfvO9T9UD2/OfMGxyVrh+6vqj96nnJWXomw4BXr6lja+gvdb2sb+Zn2n0T4dQwFarZhY6C9rhhb4gSZel5TtFOAJzN3+5U5L+6fzlvQc5k73Eez4yYqHRVhUNxVrcCPV4MCp5eBM9L0VYMa9ZWv/AHePyly9HKdojxzE1KnHvt7PtGMW3Zo6n7vxX95U85MLdF+CJLM1Ukkk6rxOp9Wej0Y4IgAmqQBYaroLk27viT85MvRz8UOYN7JX1PcXmv72n5y3avp3j+JP8ZNidGOBAIHW2IsRmGouDr2fECff9mGzvYf8X+UZejnEM7VqjrX1P4l8BPGHrDJW1PBfWX21k2N0a7PJuyVGPMlzc/KVE6OdngECk1joRnbXUHX5S5TnEGU6qnmfxqP0lTHUmGDrVBVst0XJZLA9ZoxqAXvowsfaPhJyXo92cP2J/G/+MoY7o2wNRHQK6ZhydiAQbg2J8fOWSs+flLHNiO3tt89Po0z+x9p0qVF0fDrVdmDBiAdBbQlhfSxtb2jeZDF7Dr7OxxRKRqstwQKfW2Vhdai6d0rezG1iHUns3NbaO520MZWatRwDpTYLa5RAbKAWsW0ubn4zWxzx8w22aVTsps4OeJyhCbWycl0HP3mYXauMo1KqHqGoqoIZVC3JzFuDC2hJFjyAmy4LcjauCvXKIqAAMOuykjMMo7FzfNbhG0OjzauIqPXFOixqHN2KqW15C/wl5JjDLtrCD9hf/k4b/CV8Jt3DCpTK4chgykFaVC4OYarlF7+EyWytk7R2cWNfB1DTYgG3VOWYXAQNcmxzHTyGhmlY+i6u2ek1K7E5SrLa5vYZhwHCNhiWcTtHDUcHSVslPLUSougQsgfM7KlgbuC4y2v2yDK3Qhs98+KxOQpRqaIOA1bMLeQGnwHlMX0L7FGIetUxGHSpSAGSo4uQ/gpPEafnJro0VRQqqFUcAAAB7gJLdqyYqREQI/6c1J2RX8npH/7VnN6cBOn+l3D59kYweCB/wsG/ScwU+EkUaW5EuWlAzRHi0+gT6REDzkHhMzsfb74dHSxZWZWFmysrqQQQbHwGkqndbECiK+U5CVUWse29gi6G4J15cvMTCMpBIIsRoRzBHEGBsm1N4qeNFsSHR73FRftL6AAVAdSNBwPK8saeyKtw9ApWA1vTIYj+ek1mHusZiLSpScqQykhhwI0I+IkFwMVVQuoOUkFXFipKkglWXQ20GnlKaZ3uircnUgLdrDn4gazIDbrsMtdKddf4x2x7nGvzvPeCenVDUVRUDsGCs1Qglb6GoOAALHUW01taNGFZSDYggjiDofiJVGIbKF7NgSeAza8btxI04S6q1KeWmTT1K6As9woYgX18jbyAlDF1ELk0kNNLCy5ussQoDHMRfUgm3K9uUaFXGVHy5jfKoRb8lHBR5C5nipUZ2JI1PgLD5CeLzJ7Co3dr8gDw89f0lSpj6Bd2VSnUxlRftSxppfioABe3gdQPgfGS9I+6HNpK+HrUb9unVLW5lKlmB+YYfASQZAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgaL0v4fHtgs2zzUzq32q0xd3olWBAFiWsSOyPOZzdKg4oUSwYE0aeYG47eRSezyN78ucz0QI76W9zcVj/RauFbt0WOamWyZ0YqbqeGYZeB5E/HecDhimYkC5/Tx+cu4gRnv7s/aLbUwDU+sfZ5amKqKMyqwqNnNRbcCpXtcNDw57xT2RSqU8tamrgm/b7RA951HuEykQLbZ+ApUEFOkgRBwUcNZcxEBERAx+38CK+Gr0T+0puvzUgTkHqihZGFmUlSPAqbH8p2cZz103brnD4pcVTX7Kv2XtwWso0v/MgHxRvGPsRq0pWlYzJ7q4OlWxKU6tRKasGAZ2CKGtoCx4X1HvsOcow2WfLTZN56WHUuEYsR1YpnNm9o1lPG4F156E211mFwlENmZrimgu1uJubKq/xMfkATra0EbFit8cViadKl1aXpKovTUqWyG6NV1I0IBJsL24zXKlHW71aYJJJ7Rc3JuSerDC/yl5j6yoeranmy8UuyUVb+FFszkcM7Nc+6xnzDiqys9PCUyi95hRLqBzuWJ4c5nVWLV6Sg5Vao3iwyKB5KrEk+8jjwlPr6fNKg9zrb6pL1Np240MMR4dWF+qFSPnPlbaZv9iooj+Ekv/1T2reQt8eJex8o4N2AK4esVOuZmCpbxzFAPrKoqpSB7hYi2WmS1wbXD1ibW8RT48CRMdWqM5u7Mx8WJY/MzL7t7sYnHOFoJ2b2Lm+QHwFtWPOw4cTYaxf1YwuIqs7Fm4n4DwAA5AAAW8pSDEToTd/oSwqKpxVSpVfmAcifJdfqZn63RLshlt6NbzDuD87xqOYadQH3zP7p7Tp0Kx66/U1FNNyBcpcgrUA55WAJHhm5yTd5ugpMpbA1nDjUU6lip8g4Fx7zeRJtfZGIwdTq8VSem3K40P8AKeB+EsqNwwG2q2zcWtWna47y3ulSk2uhHFToQR4Aye91t6cNj6QqUHBNu0hIzoeYYfqNJyrQ2kVQU2C1KYuQj3OW5ucjAhlv5Gx5gzYNw9iVcViVbDU8Qig9uotUgL4imwVbueAuTl4mW37JHUsS22ZSqJRpLVbPUVFDt7ThQGb4m8uZAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICYzeLYlLGUKlCst0cW8weIYHkQbEGZOIHJ++O6tfZ1Y0qoupuaVQDs1FH5MOa8vdYnXGE663o2BSxtFqVVFdSO6eF+RDDVWHJhIA3p6NMXhyzUUerTGuUi1VR8Oyw8xGjQpfbPdGStRdgnWZCrm+UPTYkByOCkM4vyOW+lyLOvTKmzAqRyYEH6ynFVdYjsoiF1dgW1U5lVTlsobgdQx00F/fNp2HvnTw+DNAYc+kZgRVB0NMHN1ZBOgJ42ve58raZK2Ew1SqctJHqN4IpY/QSWT7NU56RCSFUFmJsFAuSTwAA1Jm+bu9Em0cRY1U9Hpn27GpbyW+nxPwkwbo9GuEwQvlz1ObNqT4gtzHkLDxBjehFm43RRWxJFTFDJS9i9r/zsv8A2qb+JWTxsTYdHCoEpIBYWvYDTwAGgHkPfqbmZFVAAAAAHAT7GdmkREqEs9pbLo4hClelTqIeTqGH1l5EDTz0ZbKzZvQ6V/C3Z/CdPpNnwOApUVCUkVFGgAFtJcxJhpERKEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDF7S3cwmI++w1F/MoL/PjMK/Rlskm5wVL5sP1iJMgq4bo72VTN1wNC/mC3/cTNgwez6VIWpUqaDwVQv5REZBcxEShERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=="
  }
];

const App = () => {
  const [carrito, setCarrito] = useState({});
  const [cliente, setCliente] = useState({
    numDoc: '10712393741',
    rznSocial: 'Edgar Antonio Flores',
    direccion: 'Av. geranios',
    provincia: 'PUNO',
    departamento: 'PUNO',
    distrito: 'PUNO',
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
          direccion: "Jr. Arequipa 114",
          provincia: "PUNO",
          departamento: "PUNO",
          distrito: "PUNO",
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
            <img src={producto.imagen} alt={producto.nombre} className="mb-2 w-full h-40 object-cover" />
            <h2 className="text-xl font-bold">{producto.nombre}</h2>
            <p className="text-gray-700">Precio: S/{producto.precio.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => quitarProducto(producto)}
                className=" bg-orange-700 text-white py-1 px-2 rounded mr-2"
              >
                -
              </button>
              <span>{carrito[producto.nombre] || 0}</span>
              <button
                onClick={() => agregarProducto(producto)}
                className="bg-green-600 text-white py-1 px-2 rounded ml-2"
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
          <div>
          <h2>Ubigeo</h2>
          <input
            type="text"
            name="ubigueo"
            value={cliente.ubigueo}
            onChange={handleInputChange}
            placeholder="Ubigueo"
            className="border p-2 rounded"
          />
          </div>
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
