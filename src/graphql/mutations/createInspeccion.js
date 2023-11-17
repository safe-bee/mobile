import { gql } from "@apollo/client";


export const CREATE_INSPECCION = gql`
    mutation CreateInspeccion($colmenaId: ID!, $fecha: DateTime, $notas: String, $temperatura: Int, $clima: Clima, $estadoCajon: Boolean, $detalleCajonSellado: Sellado, $detalleCajonInvasores: Invasores, $estadoPoblacion: Boolean, $detallePoblacionEstado: Estado, $detallePoblacionNumCuadros: Int, $detallePoblacionFaltaEspacio: Boolean, $estadoReinaLarvas: Boolean, $detalleReinaLarvasQueSeVe: QueSeVe, $detalleReinaLarvasPatronDeCria: PatronDeCria, $estadoFlora: Boolean, $detalleFloraEstado: Estado, $detalleFloraDispRecursos: DisponibilidadRecursos, $estadoAlimento: Boolean, $detalleAlimentoEstado: Estado, $estadoPlagas: Boolean, $detalleAlimentoDispRecursos: DisponibilidadRecursos, $detallePlagasPlagas: Plagas, $detallePlagasTemperamentoAbejas: TemperamentoAbejas) {
        createInspeccion(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, temperatura: $temperatura, clima: $clima, estadoCajon: $estadoCajon, detalleCajonSellado: $detalleCajonSellado, detalleCajonInvasores: $detalleCajonInvasores, estadoPoblacion: $estadoPoblacion, detallePoblacionEstado: $detallePoblacionEstado, detallePoblacionNumCuadros: $detallePoblacionNumCuadros, detallePoblacionFaltaEspacio: $detallePoblacionFaltaEspacio, estadoReinaLarvas: $estadoReinaLarvas, detalleReinaLarvasQueSeVe: $detalleReinaLarvasQueSeVe, detalleReinaLarvasPatronDeCria: $detalleReinaLarvasPatronDeCria, estadoFlora: $estadoFlora, detalleFloraEstado: $detalleFloraEstado, detalleFloraDispRecursos: $detalleFloraDispRecursos, estadoAlimento: $estadoAlimento, detalleAlimentoEstado: $detalleAlimentoEstado, estadoPlagas: $estadoPlagas, detalleAlimentoDispRecursos: $detalleAlimentoDispRecursos, detallePlagasPlagas: $detallePlagasPlagas, detallePlagasTemperamentoAbejas: $detallePlagasTemperamentoAbejas) {
            clima,
            detalleAlimentoDispRecursos,
            detalleAlimentoEstado,
            detalleCajonSellado
      }
    }
`;




