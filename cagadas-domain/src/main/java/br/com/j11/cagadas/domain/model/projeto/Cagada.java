package br.com.j11.cagadas.domain.model.projeto;
import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Cagada")
//@Indexed
@Audited
@Entity
public class Cagada extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String motivo;
	private Date momento;
	private Integer cervejas;
	@ManyToOne
	private GumGalera animal;

	public Cagada() {
	}

	public String getMotivo() {
		return this.motivo;
	}
	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public Date getMomento() {
		return this.momento;
	}
	public void setMomento(Date momento) {
		this.momento = momento;
	}

	public Integer getCervejas() {
		return this.cervejas;
	}
	public void setCervejas(Integer cervejas) {
		this.cervejas = cervejas;
	}

	public GumGalera getAnimal() {
		return this.animal;
	}
	public void setAnimal(GumGalera animal) {
		this.animal = animal;
	}
}