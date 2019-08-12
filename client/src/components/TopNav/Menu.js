import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';


class Menu extends Component {

  componentDidMount() {
    const {history} = this.props;

    const pathname = `#${history.location.pathname}`;// get current path
    const mainMenu = document.getElementsByClassName('nav-item');
    for (let i = 0; i < mainMenu.length; i++) {
      mainMenu[i].onclick = function () {
        for (let j = 0; j < mainMenu.length; j++) {
          if (mainMenu[j].classList.contains('active')) {
            mainMenu[j].classList.remove('active')
          }
        }
        this.classList.toggle('active');
      }
    }
    const subMenuLi = document.getElementsByClassName('nav-arrow');
    for (let i = 0; i < subMenuLi.length; i++) {
      subMenuLi[i].onclick = function () {
        for (let j = 0; j < subMenuLi.length; j++) {
          if (subMenuLi[j].classList.contains('active')) {
            subMenuLi[j].classList.remove('active')
          }
        }
        this.classList.toggle('active');
      }
    }
    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('active');
      } else {
        this.closest(activeLi, 'li').classList.add('active');
      }
      const parentNav = this.closest(activeNav, '.nav-item');
      if (parentNav) {
        parentNav.classList.add('active');
      }

    } catch (e) {

    }

  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }


  render() {
    return (
      <div className="app-main-menu d-none d-md-block">
        <ul className="navbar-nav navbar-nav-mega">

          <li className="nav-item">
            <span className="nav-link"><IntlMessages id="sidebar.main"/></span>
            <ul className="sub-menu">

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
                  <span className="nav-text">
                                        <IntlMessages id="sidebar.dashboard"/>
                                    </span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/crypto">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.crypto"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/listing">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.listing"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/crm">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.crm"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/intranet">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.intranet"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/eCommerce">
                                    <span className="nav-text text-transform-none"><IntlMessages
                                      id="sidebar.dashboard.ecommerce"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/news">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.news"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/dashboard/misc">
                      <span className="nav-text"><IntlMessages id="sidebar.dashboard.misc"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-widgets zmdi-hc-fw"/>
                  <span className="nav-text">
                            <IntlMessages id="sidebar.widgets"/>
                                    </span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/widgets/classic">
                      <span className="nav-text"><IntlMessages id="sidebar.classic"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/widgets/modern">
                      <span className="nav-text"><IntlMessages id="sidebar.modern"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                   <span className="nav-link">
                   <i className="zmdi zmdi-trending-up zmdi-hc-fw"/>
                  <span className="nav-text">
                            <IntlMessages id="sidebar.metrics"/>
                                    </span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/metrics/classic">
                      <span className="nav-text"><IntlMessages id="sidebar.classic"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/metrics/modern">
                      <span className="nav-text"><IntlMessages id="sidebar.modern"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-item mega-menu">
            <span className="nav-link"><IntlMessages id="sidebar.components"/></span>

            <ul className="sub-menu">
              <li>
                <NavLink className="prepend-icon" to="/app/components/alerts">
                  <span className="nav-text"><IntlMessages id="sidebar.components.alerts"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/appbar">
                  <span className="nav-text"><IntlMessages id="sidebar.components.appbar"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/auto-complete">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.components.autocomplete"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/avatars">
                  <span className="nav-text"><IntlMessages id="sidebar.components.avatars"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/badges">
                  <span className="nav-text"><IntlMessages id="sidebar.components.badge"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/bottom-navigation">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.components.bottomNavigation"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/breadcrumbs">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.components.breadcrumbs"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/buttons">
                  <span className="nav-text"><IntlMessages id="sidebar.components.buttons"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/button-group">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.components.buttonGroup"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/cards">
                  <span className="nav-text"><IntlMessages id="sidebar.components.cards"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/carousel">
                  <span className="nav-text"><IntlMessages id="sidebar.components.carousel"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/chips">
                  <span className="nav-text"><IntlMessages id="sidebar.components.chips"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/color-picker">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.components.colorPicker"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/dialogs">
                  <span className="nav-text"><IntlMessages id="sidebar.components.dialogs"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/dividers">
                  <span className="nav-text"><IntlMessages id="sidebar.components.dividers"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/expansion-panel">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.components.expansionPanel"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/drawer">
                  <span className="nav-text"><IntlMessages id="sidebar.components.drawer"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/grid-list">
                  <span className="nav-text"><IntlMessages id="sidebar.components.gridList"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/list">
                  <span className="nav-text"><IntlMessages id="sidebar.components.lists"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/menu-paper">
                  <span className="nav-text"><IntlMessages id="sidebar.components.menusPaper"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/pickers">
                  <span className="nav-text"><IntlMessages id="sidebar.components.pickers"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/popovers">
                  <span className="nav-text"><IntlMessages id="sidebar.components.popovers"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/progressbar">
                  <span className="nav-text"><IntlMessages id="sidebar.components.progress"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/selects">
                  <span className="nav-text"><IntlMessages id="sidebar.components.selects"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/selection">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.components.selectionControl"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/snackbar">
                  <span className="nav-text"><IntlMessages id="sidebar.components.snackbars"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/stepper">
                  <span className="nav-text"><IntlMessages id="sidebar.components.stepper"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/tables">
                  <span className="nav-text"><IntlMessages id="sidebar.components.tables"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon" to="/app/components/tabs">
                  <span className="nav-text"><IntlMessages id="sidebar.components.tabs"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/text-fields">
                  <span className="nav-text"><IntlMessages id="sidebar.components.textFields"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/tooltips">
                  <span className="nav-text"><IntlMessages id="sidebar.components.tooltips"/></span>
                </NavLink>
              </li>
              <li>
                <NavLink className="prepend-icon"
                         to="/app/components/typography">
                  <span className="nav-text"><IntlMessages id="sidebar.components.typography"/></span>
                </NavLink>
              </li>
            </ul>

          </li>

          <li className="nav-item">
            <span className="nav-link"><IntlMessages id="sidebar.extensions"/></span>
            <ul className="sub-menu">

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-code-setting zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.editors"/></span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/editor/ck">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.editors.CKEditor"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/editor/wysiswyg">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.editors.WYSISWYGEditor"/></span>
                    </NavLink>
                  </li>
                </ul>

              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-brush zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.pickers"/></span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/pickers/date-time">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.pickers.dateTimePickers"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/pickers/color">
                      <span className="nav-text"><IntlMessages id="sidebar.pickers.colorPickers"/></span>
                    </NavLink>
                  </li>
                </ul>

              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-key zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.extensions"/></span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/extensions/dnd">
                      <span className="nav-text"><IntlMessages id="sidebar.extensions.dragNDrop"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extensions/dropzone">
                      <span className="nav-text"><IntlMessages id="sidebar.extensions.dropzone"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extensions/sweet-alert">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.extensions.sweetAlert"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extensions/notification">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.extensions.notification"/></span>
                    </NavLink>
                  </li>
                </ul>

              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-chart zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.chart"/></span>
                </span>

                <ul className="sub-menu sub-menu-half">
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/line">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.line"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/bar">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.bar"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/area">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.area"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/composed">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.chart.composed"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/scatter">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.chart.scatter"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/pie">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.pie"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/radial">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.radial"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/radar">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.radar"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/chart/treemap">
                      <span className="nav-text"><IntlMessages id="sidebar.chart.tree"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-google-maps zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.map"/></span>
                </span>

                <ul className="sub-menu sub-menu-half">
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/simple">
                      <span className="nav-text"><IntlMessages id="sidebar.map.simple"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/styled">
                      <span className="nav-text"><IntlMessages id="sidebar.map.styled"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/geo-location">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.geoLocation"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/directions">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.mapDirection"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/overlay">
                      <span className="nav-text"><IntlMessages id="sidebar.map.overlay"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/kml">
                      <span className="nav-text"><IntlMessages id="sidebar.map.kmLayer"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/popup-info">
                      <span className="nav-text"><IntlMessages id="sidebar.map.popupInfo"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/traffic">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.trafficLayer"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/street-view">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.streetView"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/event">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.eventListener"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/drawing">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.mapDrawing"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/map/clustering">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.map.mapClustering"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.calendar"/></span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/basic">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.calendar.basic"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/cultures">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.calendar.cultures"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/dnd">
                      <span className="nav-text"><IntlMessages id="sidebar.calendar.dnd"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/popup">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.calendar.popup"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/rendering">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.calendar.rendering"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/selectable">
                      <span className="nav-text"><IntlMessages id="sidebar.calendar.selectable"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/calendar/timeslots">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.calendar.timeslots"/></span>
                    </NavLink>
                  </li>
                </ul>

              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"/>
                  <span className="nav-text text-transform-none"><IntlMessages
                    id="sidebar.eCommerce"/></span>
                </span>

                <ul className="sub-menu">

                  <li>
                    <NavLink className="prepend-icon" to="/app/ecommerce/products-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.eCommerce.productsList"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/ecommerce/products-grid">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.eCommerce.productsGrid"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-collection-item-8 zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule"/></span>
                </span>

                <ul className="sub-menu sub-menu-half">
                  <li>
                    <NavLink className="prepend-icon" to="/app/app-module/login-1">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.login1"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/app-module/login-2">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.login2"/></span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/login-with-stepper">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.loginStepper"/></span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/sign-up-1">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.signup1"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/sign-up-2">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.signup2"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/forgot-password-1">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.forgotPassword1"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/forgot-password-2">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.appModule.forgotPassword2"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/lock-screen-1">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.lock1"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon"
                             to="/app/app-module/lock-screen-2">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.appModule.lock2"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </li>

          <li className="nav-item">
            <span className="nav-link"><IntlMessages id="sidebar.modules"/></span>

            <ul className="sub-menu">

              <li>
                <NavLink to="/app/to-do">
                  <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/to-do-redux">
                  <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.toDoRedux"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/mail">
                  <i className="zmdi zmdi-email zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.mail"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/mail-redux">
                  <i className="zmdi zmdi-email zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.mailRedux"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/chat">
                  <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.chat"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/chat-redux">
                  <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.chatRedux"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/contact">
                  <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.appModule.contact"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/contact-redux">
                  <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages
                    id="sidebar.appModule.contactRedux"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/social-apps/profile">
                  <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.profile"/></span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/app/social-apps/wall">
                  <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.wall"/></span>
                </NavLink>
              </li>

            </ul>
          </li>

          <li className="nav-item">
            <span className="nav-link"><IntlMessages id="sidebar.extras"/></span>
            <ul className="sub-menu">

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.tables"/></span>
                </span>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/table/basic">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.tables.basicTable"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/table/data">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.tables.dataTable"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-swap-alt zmdi-hc-fw zmdi-hc-rotate-90"/>
                  <span className="nav-text"><IntlMessages id="sidebar.timeLine"/></span>
                </span>
                <ul className="sub-menu">

                  <li>
                    <NavLink className="prepend-icon" to="/app/time-line/default">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.timeLine.default"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/time-line/default-with-icon">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.timeLine.defaultwithIcons"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/time-line/left-align">
                      <span className="nav-text"><IntlMessages id="sidebar.timeLine.leftAligned"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.customViews"/></span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/custom-views/simple-list">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.customViews.plainListView"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/custom-views/strip-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.customViews.withDivider"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/custom-views/card-list">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.customViews.cardListView"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-book-image zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.forms"/></span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/form/components">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.forms.components"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/form/stepper">
                      <span className="nav-text"><IntlMessages id="sidebar.forms.stepper"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-view-web zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.icons"/></span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/icons/material">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.icons.material"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-collection-bookmark zmdi-hc-fw zmdi-hc-rotate-90"/>
                  <span className="nav-text"><IntlMessages id="sidebar.extraElements"/></span>
                </span>
                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-elements/pricing-table">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.extraElements.pricingTable"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-elements/callouts">
                                    <span className="nav-text"><IntlMessages
                                      id="sidebar.extraElements.callouts"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-elements/testimonials">
                                <span className="nav-text"><IntlMessages
                                  id="sidebar.extraElements.testimonials"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-arrow">
                <span className="nav-link">
                  <i className="zmdi zmdi-pages zmdi-hc-fw"/>
                  <span className="nav-text"><IntlMessages id="sidebar.extraPages"/></span>
                </span>
                <ul className="sub-menu sub-menu-half">
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/about-us">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.extraPages.aboutUs"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/contact-us">
                      <span className="nav-text"><IntlMessages id="sidebar.extraPages.contactUs"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/blog">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.extraPages.blog"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/faq">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.extraPages.faq"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/portfolio">
                      <span className="nav-text"><IntlMessages id="sidebar.extraPages.portfolio"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/error-404">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.extraPages.404"/></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/extra-pages/error-500">
                                            <span className="nav-text"><IntlMessages
                                              id="sidebar.extraPages.500"/></span>
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </li>

        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);