export const letras = p => (p && typeof p === 'string' && p.length > 0) 
                               ? `Vocales ${p.match(/[aeiou]/gi).length} consonantes ${p.match(/[b-df-hj-np-tv-zñ]/gi).length}`
                               : 'invalido'
                    
export const nombreValido = n => (n && typeof n === 'string' && n.length > 0)
                                    ? (RegExp(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/, 'g').test(n))
                                    : 'Invalido'

export const emailValido = e => (e && typeof e === 'string' && e.length > 0)
                                    ?(RegExp(/^[\w.]+\@+[a-z0-9]+\.[a-z]{2,15}$/, 'g').test(e))
                                    : 'Invalido'