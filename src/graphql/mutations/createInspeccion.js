import { gql } from "@apollo/client";


export const CREATE_INSPECCION = gql`
    mutation CreateInspeccion($colmenaId: ID!, $tareaId: Int, $fecha: DateTime, $registroId: ID, $notas: String, $clima: Clima, $temperatura: Int, $detalleCajonSellado: Sellado, $estadoCajon: Boolean, $detalleCajonInvasores: Invasores, $estadoPoblacion: Boolean, $detallePoblacionEstado: Estado, $detallePoblacionNumCuadros: Float, $detallePoblacionFaltaEspacio: Boolean, $estadoReinaLarvas: Boolean, $detalleReinaLarvasQueSeVe: QueSeVe, $detalleReinaLarvasPatronDeCria: PatronDeCria, $estadoFlora: Boolean, $detalleFloraEstado: Estado, $detalleFloraDispRecursos: DisponibilidadRecursos, $estadoAlimento: Boolean, $detalleAlimentoEstado: Estado, $detalleAlimentoDispRecursos: DisponibilidadRecursos, $estadoPlagas: Boolean, $detallePlagasPlagas: Plagas, $detallePlagasTemperamentoAbejas: TemperamentoAbejas, $fotoInspeccion: String) {
        createInspeccion(colmenaId: $colmenaId, tareaId: $tareaId, fecha: $fecha, registroId: $registroId, notas: $notas, clima: $clima, temperatura: $temperatura, detalleCajonSellado: $detalleCajonSellado, estadoCajon: $estadoCajon, detalleCajonInvasores: $detalleCajonInvasores, estadoPoblacion: $estadoPoblacion, detallePoblacionEstado: $detallePoblacionEstado, detallePoblacionNumCuadros: $detallePoblacionNumCuadros, detallePoblacionFaltaEspacio: $detallePoblacionFaltaEspacio, estadoReinaLarvas: $estadoReinaLarvas, detalleReinaLarvasQueSeVe: $detalleReinaLarvasQueSeVe, detalleReinaLarvasPatronDeCria: $detalleReinaLarvasPatronDeCria, estadoFlora: $estadoFlora, detalleFloraEstado: $detalleFloraEstado, detalleFloraDispRecursos: $detalleFloraDispRecursos, estadoAlimento: $estadoAlimento, detalleAlimentoEstado: $detalleAlimentoEstado, detalleAlimentoDispRecursos: $detalleAlimentoDispRecursos, estadoPlagas: $estadoPlagas, detallePlagasPlagas: $detallePlagasPlagas, detallePlagasTemperamentoAbejas: $detallePlagasTemperamentoAbejas, fotoInspeccion: $fotoInspeccion) {
        clima
        }
    }
`;




