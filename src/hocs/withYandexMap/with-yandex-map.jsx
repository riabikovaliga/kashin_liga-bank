import React, {PureComponent} from "react";

const BLIP_LAYOUT = `<div class="bank-departments__map-blip"></div>`;

const withYandexMap = (Component) => {
  class WithYandexMap extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        iconLayoutTemplate: null,
      };

      this._onLoad = this._onLoad.bind(this);
    }

    _onLoad(ymaps) {
      this.setState({
        iconLayoutTemplate: ymaps.templateLayoutFactory.createClass(BLIP_LAYOUT)
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onLoad={this._onLoad}
          iconLayoutTemplate={this.state.iconLayoutTemplate}
        />
      );
    }
  }

  return WithYandexMap;
};

/* Пришлось отойти от использования хуков
 * потому что библиотека не умеет работать с ними
 * Потому вынес состояние в ХОК
 */
export default withYandexMap;
